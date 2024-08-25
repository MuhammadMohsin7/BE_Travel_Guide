const crypto = require("crypto");
const Pagination = require("../../../helpers/pagination");
const jwt = require("jsonwebtoken");
const constants = require("../../../constants/constants.json");
const { models } = require("../../../sequelize/sequelize");
const sequelize = require("../../../sequelize/sequelize");
const twillio = require("../../../helpers/twillio")
const sendMail = require("../../../helpers/send_mail");

const moment = require("moment");

const dotenv = require('dotenv');


let baseUrl = ""

if (process.env.ENV == "development")
{
    baseUrl = "localhost:1993/uploads/"
} 
else if (process.env.ENV == "staging")
{
    baseUrl = constants.stagingBaseURL + "uploads/"
}
else if (process.env.ENV == "production")
{
    baseUrl = constants.productionBaseURL + "uploads/"
}



const signUp = async function (req, res, next) {
    try
    {   
        let [user, error]  = await createUser(req, new models.users({}), next)
        
        if (user)
        {
            var code = Math.floor(1000 + Math.random() * 9000);
            code = 1234
            let instance = new sequelize.db(sequelize.models.users);
            [user, error] = await instance.findOne({where: {id: user.id}})
            instance.model = user
            let [updateOTP, error2] = await instance.update({otp: code});
            
            //let reqCall = await twillio.send_message(phone, code)
            
            //await sendMail.sendto(user.email, "Verification Code", "Your OTP Code is "+ code);
            
            
            return next({
                status: "success",
                statusCode: 200,
                otp:code, //need to remove
                message: "OTP_SENT"
            });  
        }
        else
        {
            return next(error);
        }
    }
    catch(error)
    {
        return next(error)
    } 
}



const verifyOTP = async function (req, res, next) {
    try
    {   
        let {phone, otp, password} = req.body
        
        
        let instance = new sequelize.db(sequelize.models.users);
        let [user, error] = await instance.findOne({where:{phone: phone}})
        if (user)
        {
            if (!user.validatePassword(password))
            {
                return next({
                    status: "warning",
                    statusCode: 401,
                    message: "AUTHORIZATION_FAILED"
                });
                
            }
            else
            {
                if (user.otp == otp)
                {
                    
                    let genericFindQuery2 = {where: {status: 1, id : user.id}}
                    
                    
                    let instance3 = new sequelize.db(sequelize.models.users);
                    let [user2, error] = await instance3.findOne(genericFindQuery2)
                    
                    let instance2 = new sequelize.db(sequelize.models.users);
                    instance2.model = user2
                    
                    let [updateOTP, error2] = await instance2.update({is_verified: 1, otp: null});  
                    
                    
                    
                    let genericFindQuery = {where: {status: 1, id : user.id}, include:[
                        {
                            required : false,
                            model: models.categories
                        },
                        {
                            required : false,
                            model: models.countries
                        },
                        {
                            required : false,
                            model: models.cities
                        },
                        {
                            required : false,
                            model: models.days_and_time_slots
                        },
                    ]}
                    
                    let instance4 = new sequelize.db(sequelize.models.users);
                    let [user3, error1] = await instance4.findOne(genericFindQuery)
                    
                    
                    time = "365d";
                    const token = await jwt.sign({   
                        user: user3
                    }, constants.jwtUser, {
                        expiresIn: time,
                    });
                    
                    return next({
                        status: "success",
                        statusCode: 200,
                        data:{user: user3, token: token},
                        message: "USER_VERIFIED_AND_LOGGED_IN"
                    });
                }
                else
                {
                    return next({
                        status: "warning",
                        statusCode: 401,
                        message: "INCORRECT_OTP"
                    });
                }
            }  
        }    
        else
        {
            return next({
                status: "error",
                statusCode: 208,
                message: "DATA_NOT_AVAILABLE"
            });
        }
        
    }
    catch(error)
    {
        return next(error)
    } 
}


const signIn = async function (req, res, next) {
    try
    {   
        let {phone, password} = req.body
        
        console.log("phone == ", phone)
        
        let instance = new sequelize.db(sequelize.models.users);
        let [user, error] = await instance.findOne({where: {phone: phone, status: 1}})
        if (user)
        {
            if (!user.validatePassword(password))
            {
                return next({
                    status: "warning",
                    statusCode: 401,
                    message: "AUTHORIZATION_FAILED"
                });
                
            }
            else
            {
                if (user.is_verified == 1)
                {
                    
                    
                    let genericFindQuery = {where: {is_verified: 1, status: 1, id: user.id}, include:[
                        {
                            required : false,
                            model: models.categories
                        },
                        {
                            required : false,
                            model: models.countries
                        },
                        {
                            required : false,
                            model: models.cities
                        },
                        {
                            required : false,
                            model: models.days_and_time_slots
                        },
                    ]}
                    
                    
                    let [user2, error] = await instance.findOne(genericFindQuery)
                    time = "365d";
                    const token = await jwt.sign({   
                        user: user2
                    }, constants.jwtUser, {
                        expiresIn: time,
                    });
                    
                    return next({
                        status: "success",
                        statusCode: 200,
                        data: {user: user2, token: token},
                        message: "LOGGED_IN"
                    });
                }
                else
                {
                    var code = Math.floor(1000 + Math.random() * 9000);
                    code = 1234
                    let instance = new sequelize.db(sequelize.models.users);
                    instance.model = user
                    let [updateOTP, error2] = await instance.update({otp: code});
                    // let reqCall = await twillio.send_message(phone, code)
                    
                    // await sendMail.sendto(user.email, "Verification Code", "Your OTP Code is "+ code);
                    
                    return next({
                        status: "success",
                        statusCode: 200,
                        otp:code,//need to remove
                        message: "OTP_SENT"
                    });
                }
            }
        }
        else
        {
            return next({
                status: "error",
                statusCode: 208,
                message: "INVALID_CREDENTIALS"
            });
        }
        
    }
    catch(error)
    {
        return next(error)
    } 
}


const forgotPassword = async function (req, res, next) {
    try
    {   
        let {phone} = req.body
        
        let instance = new sequelize.db(sequelize.models.users);
        let [user, error] = await instance.findOne({where: {phone: phone}})
        if (user)
        {
            var code = Math.floor(1000 + Math.random() * 9000);
            code = 1234
            let instance2 = new sequelize.db(sequelize.models.users);
            instance2.model = user
            let [updateOTP, error2] = await instance2.update({otp: code});
            // let reqCall = await twillio.send_message(phone, code)
            //await sendMail.sendto(user.email, "Verification Code", "Your OTP Code is "+ code);
            
            
            time = "365d";
            const token = await jwt.sign({   
                user: user
            }, constants.jwtUser, {
                expiresIn: time,
            });
            
            return next({
                status: "success",
                statusCode: 200,
                token: token,
                otp:code, //need to remove
                message: "OTP_SENT"
            });
        }
        else
        {
            return next({
                status: "error",
                statusCode: 208,
                message: "DATA_NOT_AVAILABLE"
            });
        }
        
    }
    catch(error)
    {
        return next(error)
    } 
}


const updatePassword = async function (req, res, next) {
    try
    {   
        let {otp, password} = req.body

        let instance = new sequelize.db(sequelize.models.users);
        let [user, error] = await instance.findOne({where:{phone: req.user.phone}})
        if (user)
        {
            if (user.otp == otp)
            {
                
                let instance2 = new sequelize.db(sequelize.models.users);
                instance2.model = user
                
                let passwordHash =  crypto.createHash("sha1").update(password).digest("hex");
                
                let [updateUser, error2] = await instance2.update({password: passwordHash, otp: null}, { omitNull: false })
                if (error2)
                {
                    return next(error2)
                }
                
                return next({
                    status: "success",
                    statusCode: 200,
                    message: "DATA_UPDATED"
                });  
            }
            else
            {
                return next({
                    status: "warning",
                    statusCode: 401,
                    message: "INCORRECT_OTP"
                });
            }
        }
        else
        {
            return next(error);
        }
    }
    catch(error)
    {
        return next(error)
    } 
}



const getPosts = async function (req, res, next) {
    try
    {   
        let {search, status} = req.query
        let query = {where: {}, include:[{
            required: false,
            model: models.categories
        }]}

        if (status)
        {
            query.where["status"] = req.query.status
        }

        if (search)
        {
            filterBy.searchOnMultipleFields(query, ["title","content", "slug","meta_title","meta_description","meta_keywords"], search)
        }

        console.log("query ==== ", query)


        let pagination = new Pagination(req, query);


        let instance = new sequelize.db(sequelize.models.posts);
        let [posts, error]  = await instance.findAndCountAll(query)
        
        if (posts)
        {
            pagination.setCount(posts.count)

            return next({
                status: "success",
                statusCode: 200,
                posts: posts.rows,
                pagination: pagination,
                message: "DATA_FETCHED"
            });  
        }
        else
        {
            return next(error);
        }
    }
    catch(error)
    {
        return next(error)
    } 
}

const getPostById = async function (req, res, next) {
    try
    {   
        let {post_id} = req.params
    

        let query = {where: {id: post_id}, include:[{
            required: false,
            model: models.categories
        }]}

        let instance = new sequelize.db(sequelize.models.posts);
        let [post, error] = await instance.findOne(query)
        
        if (post)
        {
            return next({
                status: "success",
                statusCode: 200,
                message: "Category",
                data: post
            });  
        }
        else
        {
            return next(error);
        }
    }
    catch(error)
    {
        return next(error)
    } 
}





//--//
module.exports = {
    
    signUp,
    verifyOTP,
    signIn,
    forgotPassword,
    updatePassword,
    
    getPosts,
    getPostById
  
    
    
};

const createUser = async (req, user, next) => {
    
    let {name, email, password, phone} = req.body
    
    let instance = new sequelize.db(sequelize.models.users);
    let [userFound, error] = await instance.findOne({where: {phone: phone}})
    if (userFound)
    {
        return next({
            status: "error",
            statusCode: 208,
            message: "PHONE_ALREADY_EXIST"
        });
    }
    [userFound, error] = await instance.findOne({where: {email: email}})
    if (userFound)
    {
        return next({
            status: "error",
            statusCode: 208,
            message: "EMAIL_ALREADY_EXIST"
        });
    }
    
    let passwordHash =  crypto.createHash("sha1").update(password).digest("hex");
    
    user.name = name;
   
    user.email = email;

    user.phone = phone;
    user.status = 1
    user.password = passwordHash;
    
    // let instance = new sequelize.db(sequelize.models.users);
    return  await instance.create(user.toJSONincludingPassword())
    
}

const updateUser = async (req, next) => {
    
    
    let genericFindQuery = {where: {is_verified: 1, status: 1, id: req.user.id}, include:[
        {
            required : false,
            model: models.categories
        },
        {
            required : false,
            model: models.countries
        },
        {
            required : false,
            model: models.cities
        },
        {
            required : false,
            model: models.days_and_time_slots
        },
    ]}
    
    
    let picture = req.file
    console.log("picture = ", picture)
    if (picture)
    {
        let url = baseUrl + "" + picture.filename
        req.body.profile_image_url = url
    }
    
    let instance = new sequelize.db(sequelize.models.users);
    let [user, error] = await instance.findOne({where: {id: req.user.id}})
    if (user)
    {
        let instance2 = new sequelize.db(sequelize.models.users);
        instance2.model = user
        
        delete req.body.is_verified
        delete req.body.email
        delete req.body.phone
        delete req.body.is_blue_tick
        delete req.body.status
        delete req.body.otp
        delete req.body.password
        
        let [updateUser, error2] = await instance2.update(req.body)
        if (error2)
        {
            return next(error2)
        }
        
        return await instance.findOne(genericFindQuery)
    }  
    else
    {
        return next(error)
    }  
}

