

const crypto = require("crypto");
const Pagination = require("../../../helpers/pagination");
const jwt = require("jsonwebtoken");
const constants = require("../../../constants/constants.json");
const { models } = require("../../../sequelize/sequelize");
const sequelize = require("../../../sequelize/sequelize");
// -- //

const ok = async function (req, res, next) {
 
    try {

// Create token
let time = "2h";

  time = "365d";

const token = await jwt.sign({ user_id: "1", phone: "12" }, constants.jwt, {
  expiresIn: time,
});

console.log("token :: " , token)

        return next({
            status: "success",
            statusCode: 200,
        });
    }
    catch(error)
    {
        return next(error)
    }
   
}


const login = async function (req, res, next) {
    try
    {   
        let {email, password} = req.body
        
        let instance = new sequelize.db(sequelize.models.admins);
        let [admin, error] = await instance.findOne({where: {email: email, status: 1}})
        if (admin)
        {
            if (!admin.validatePassword(password))
            {
                return next({
                    status: "warning",
                    statusCode: 401,
                    message: "AUTHORIZATION_FAILED"
                });
                
            }
            else
            {
                     time = "365d";
                    const token = await jwt.sign({   
                        admin: admin
                    }, constants.jwtUser, {
                        expiresIn: time,
                    });
                    
                    return next({
                        status: "success",
                        statusCode: 200,
                        data: {admin: admin, token: token},
                        message: "LOGGED_IN"
                    });
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


const signUp = async function (req, res, next) {
    try
    {   
        let [admin, error]  = await createAdmin(req, new models.admins({}), next)
        
        if (admin)
        {
            // var code = Math.floor(1000 + Math.random() * 9000);
            // code = 1234
            // let instance = new sequelize.db(sequelize.models.users);
            // [user, error] = await instance.findOne({where: {id: user.id}})
            // instance.model = user
            // let [updateOTP, error2] = await instance.update({otp: code});
            
            //let reqCall = await twillio.send_message(phone, code)
            
            //await sendMail.sendto(user.email, "Verification Code", "Your OTP Code is "+ code);
            
            
            return next({
                status: "success",
                statusCode: 200,
              //  otp:code, //need to remove
              //  message: "OTP_SENT"

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

const getUsers = async function (req, res, next) {
    try
    {   
        let {search, status} = req.query
        let query = {where: {}}

        if (status)
        {
            query.where["status"] = req.query.status
        }

        if (search)
        {
            filterBy.searchOnMultipleFields(query, ["name","email"], search)
        }

        console.log("query ==== ", query)


        let pagination = new Pagination(req, query);


        let instance = new sequelize.db(sequelize.models.users);
        let [users, error]  = await instance.findAndCountAll(query)
        
        if (users)
        {
            pagination.setCount(users.count)

            return next({
                status: "success",
                statusCode: 200,
                users: users.rows,
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

const addUser = async function (req, res, next) {
    try
    {   
        let [user, error]  = await createUser(req, new models.users({}), next)
        
        if (user)
        {
            
            return next({
                status: "success",
                statusCode: 200,
              //  otp:code, //need to remove
                message: "DATA_ADDED"
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


const getCategories = async function (req, res, next) {
    try
    {   
        let {search, status} = req.query
        let query = {where: {}}

        if (status)
        {
            query.where["status"] = req.query.status
        }

        if (search)
        {
            filterBy.searchOnMultipleFields(query, ["name","description"], search)
        }

        console.log("query ==== ", query)


        let pagination = new Pagination(req, query);


        let instance = new sequelize.db(sequelize.models.categories);
        let [categories, error]  = await instance.findAndCountAll(query)
        
        if (categories)
        {
            pagination.setCount(categories.count)

            return next({
                status: "success",
                statusCode: 200,
                categories: categories.rows,
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

const getCategoryById = async function (req, res, next) {
    try
    {   
        let {category_id} = req.params
    

        let query = {where: {id: category_id}}

        let instance = new sequelize.db(sequelize.models.categories);
        let [category, error] = await instance.findOne(query)
        
        if (category)
        {
            return next({
                status: "success",
                statusCode: 200,
                message: "Category",
                data: category
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

const addCategory = async function (req, res, next) {
    try
    {   
        let [category, error]  = await createCategory(req, new models.categories({}), next)
        
        if (category)
        {
            return next({
                status: "success",
                statusCode: 200,
                data: category,
                message: "DATA_ADDED"
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

const updateCategory = async function (req, res, next) {
    try
    {   
        let [category, error]  = await updateCategoryInternal(req, next)
        
        if (category)
        {
    
            return next({
                status: "success",
                statusCode: 200,
                message: "DATA_UPDATED",
                data: category
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

const deleteCategory = async function (req, res, next) {
    try
    {   
        let {category_id} = req.params
        let instance = new sequelize.db(sequelize.models.categories);

        let [category, error] = await instance.destroy({where: {id: category_id}, force: true})

        if (error)
        {
            return next(error);
        }
        else
        {
            return next({
                status: "success",
                statusCode: 200,
                message: "DATA_DELETED"
            });  
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

const addPost = async function (req, res, next) {
    try
    {   
        let [post, error]  = await createPost(req, new models.posts({}), next)
        
        if (post)
        {
            return next({
                status: "success",
                statusCode: 200,
                data: post,
                message: "DATA_ADDED"
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

const updatePost = async function (req, res, next) {
    try
    {   
        let [post, error]  = await updatePostInternal(req, next)
        
        if (post)
        {
    
            return next({
                status: "success",
                statusCode: 200,
                message: "DATA_UPDATED",
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

const deletePost = async function (req, res, next) {
    try
    {   
        let {post_id} = req.params
        let instance = new sequelize.db(sequelize.models.posts);

        let [post, error] = await instance.destroy({where: {id: post_id}, force: true})

        if (error)
        {
            return next(error);
        }
        else
        {
            return next({
                status: "success",
                statusCode: 200,
                message: "DATA_DELETED"
            });  
        }
    }
    catch(error)
    {
        return next(error)
    } 
}

//--//
 module.exports = {
                            
               
login,
 signUp,

 getUsers,
 addUser,

 getCategories,
 getCategoryById,
 addCategory,
 updateCategory,
 deleteCategory,


 getPosts,
 getPostById,
 addPost,
 updatePost,
 deletePost
                            
                            
};
                        
const createUser = async (req, user, next) => {
    
    let {name, email, password, phone, username} = req.body
    
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
    user.username = username;
    user.status = 1
    user.password = passwordHash;
    
    // let instance = new sequelize.db(sequelize.models.users);
    return  await instance.create(user.toJSONincludingPassword())
    
}
                     
const createAdmin = async (req, admin, next) => {
    
    let {name, email, password} = req.body
    
    let instance2 = new sequelize.db(sequelize.models.admins);
    [userFound, error] = await instance2.findOne({where: {email: email}})
    if (userFound)
    {
        return next({
            status: "error",
            statusCode: 208,
            message: "EMAIL_ALREADY_EXIST"
        });
    }
    
    let passwordHash =  crypto.createHash("sha1").update(password).digest("hex");
    
    admin.name = name;
   
    admin.email = email;


    admin.status = 1
    admin.password = passwordHash;
    
    // let instance = new sequelize.db(sequelize.models.users);
    return  await instance2.create(admin.toJSONincludingPassword())
    
}                      

const createCategory = async (req, category, next) => {
    
    let {name, description} = req.body
    
    let instance = new sequelize.db(sequelize.models.categories);
    let [categoryFound, error] = await instance.findOne({where: {name: name}})
    if (categoryFound)
    {
        let instance2 = new sequelize.db(sequelize.models.categories);
         instance2.model = categoryFound

    return await instance2.update(req.body)

    }
   else
   {
    category.name = name;
    category.description = description;
    category.status = 1
    
    return  await instance.create(category.toJSON())
   }

}

const updateCategoryInternal = async (req, next) => {

    let {category_id} = req.params
    let instance = new sequelize.db(sequelize.models.categories);
    let [category, error] = await instance.findOne({where: {id: category_id}})
    if (category)
    {
        let instance2 = new sequelize.db(sequelize.models.categories);
        instance2.model = category
        
        let [updateCategory, error2] = await instance2.update(req.body)

        if (error2)
        {
            return next(error2)
        }
        
        return await instance.findOne({where: {id: category_id}})
    }  
    else
    {
        return next(error)
    }  
}


const createPost = async (req, post, next) => {
    
    let {title,
        slug,
        content,
        meta_title,
        meta_keywords,
        meta_description,
        category_id} = req.body
    
        let instance = new sequelize.db(sequelize.models.posts);

    console.log("req.file == ", req.file)

    if(req.files)
        {
            Object.entries(req.files).forEach(([key, fileArray]) => {
                fileArray.forEach((file) => {
                    console.log(`Field Name: ${key}`);
                    console.log(`File Name: ${file.filename}`);
                    console.log(`File Path: ${file.path}`);
                    console.log(`Original Name: ${file.originalname}`);
                    console.log(`MIME Type: ${file.mimetype}`);
                    console.log(`Size: ${file.size} bytes`);


                    console.log("req.file == ", req.file)

                    if (file.fieldname == "main_image")
                        {
                            post.main_image = file.filename
                        }
                        else if (file.fieldname == "secondary_image_1")
                        {
                            post.secondary_image_1 = file.filename
                        }
                        else if (file.fieldname == "secondary_image_2")
                        {
                            post.secondary_image_2 = file.filename
                        }
                        else if (file.fieldname == "secondary_image_3")
                        { 
                            post.secondary_image_3 = file.filename
                        }
                        else if (file.fieldname == "secondary_image_4")
                        {
                            post.secondary_image_4 = file.filename
                         }
                        else if (file.fieldname == "secondary_image_5")
                        { 
                            post.secondary_image_5 = file.filename
                        }


                    // Process the file as needed
                });
            });
            
        }



    post.title = title;
    post.slug = slug;
    post.content = content
    post.meta_title = meta_title;
    post.meta_keywords = meta_keywords
    post.meta_description = meta_description;
    post.category_id = category_id;
    post.status = 1;
    
    return  await instance.create(post.toJSON())

}

const updatePostInternal = async (req, next) => {

    let {post_id} = req.params
    let instance = new sequelize.db(sequelize.models.posts);
    let [post, error] = await instance.findOne({where: {id: post_id}})
    if (post)
    {
        let instance2 = new sequelize.db(sequelize.models.posts);
        instance2.model = post
        

        if(req.files)
            {
                Object.entries(req.files).forEach(([key, fileArray]) => {
                    fileArray.forEach((file) => {
 
                        console.log("req.file == ", req.file)
    
                        if (file.fieldname == "main_image")
                            {
                                req.body.main_image = file.filename
                            }
                            else if (file.fieldname == "secondary_image_1")
                            {
                                req.body.secondary_image_1 = file.filename
                            }
                            else if (file.fieldname == "secondary_image_2")
                            {
                                req.body.secondary_image_2 = file.filename
                            }
                            else if (file.fieldname == "secondary_image_3")
                            { 
                                req.body.secondary_image_3 = file.filename
                            }
                            else if (file.fieldname == "secondary_image_4")
                            {
                                req.body.secondary_image_4 = file.filename
                             }
                            else if (file.fieldname == "secondary_image_5")
                            { 
                                req.body.secondary_image_5 = file.filename
                            }
    
    
                        // Process the file as needed
                    });
                });
                
            }


        let [updatePost, error2] = await instance2.update(req.body)

        if (error2)
        {
            return next(error2)
        }
        
        return await instance.findOne({where: {id: post_id}})
    }  
    else
    {
        return next(error)
    }  
}