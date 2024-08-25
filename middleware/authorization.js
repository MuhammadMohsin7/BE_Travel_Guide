const sequelize = require("./../sequelize/sequelize");
const keys_length = require("./../config/keys_length");
const base_encoder = require("./../utils/base_encoder");
const database = require('../utility/calls/databaseRequest');
const { models } = require("./../sequelize/sequelize");
//--//
module.exports = async function(req, res, next){
    try{
        let access_authorization = String(req.getHeader("authorization", "")).trim();
        if(access_authorization && access_authorization !== ""){
            if(access_authorization.indexOf(keys_length.index_separator) < 0){return next(401);}
            access_authorization = access_authorization.split(keys_length.index_separator);
            if(!access_authorization || !access_authorization.length || access_authorization.length !== 3){return next(401);}
            let user_id = parseInt(base_encoder.decode(access_authorization[0])) || 0;
            let auth_id = parseInt(base_encoder.decode(access_authorization[1])) || 0;
            let access_token = String(access_authorization[2]).trim();
            //--//
            if(!user_id || user_id <= 0){return next(401);}
            if(!auth_id || auth_id <= 0){return next(401);}
            if(!access_token || access_token === "" || access_token.length !== keys_length.access_token){return next(401);}
            //--//
            let findQuery = {
                raw: true,
                nest: true,
                where: {id: auth_id},
                include: [{
                    required: true,
                    model: sequelize.models.users.scope("defaultScope"),
                    where: {id: user_id}

                    //where: {id: user_id, active: "1", status: "1", is_under_review: "0"}
                }]
            };

            let instance = new sequelize.db(sequelize.models.authorizations);
            let [auth, er] = await instance.findOne({where: {user_id: user_id}})
            if(!auth){return next(403);}


            let authorization, err


            if(req.url.includes('/api/v1/organization'))
            {
                authorization = await database.findBy(models.users,{id:user_id})
            }
            else if(req.url.includes('/api/v1/admin'))
            {
                authorization = await database.findBy(models.users,{id:user_id})
            }
            else if(req.url.includes('/api/v1'))
            {
                authorization = await database.findBy(models.users,{id:user_id})
            }
            else
            {
                [authorization, err] = await instance.findOne(findQuery);
            }
          //  console.log('==== >>> authorization ===  ', authorization)
            let data_v1 = await database.findBy(models.users,{id:user_id})

            if(err){return next(err);}
            //--//
            if(!authorization || !authorization.id || authorization.id < 1){return next(401);}
            //if(authorization.access_token !== access_token){return next(401);}
            //--//
            req.appUser = authorization.user || authorization;

      

            if (req.appUser.role == "organization")
            {
                let instance = new sequelize.db(sequelize.models.organizations);
                let [organization, err3] = await instance.findOne({where: {admin_id: req.appUser.id, status: 1}})
              //  console.log('==== >>> req.appOrganization === >>> ', organization)
               // console.log('==== >>> err3 === >>> ', err3)
                req.appOrganization = organization
            }
            else if (req.appUser.role == "supervisor")
            {

                let instance2 = new sequelize.db(sequelize.models.supervisors_detail);
                let [supervisor_detail, err2] = await instance2.findOne({where: {supervisor_id: req.appUser.id, status: 1}})
                req.appSupervisor = supervisor_detail

                let instance = new sequelize.db(sequelize.models.organizations);
                let [organization, err] = await instance.findOne({where: {id: req.appSupervisor.organization_id, status: 1}})
                req.appOrganization = organization


                let instance3 = new sequelize.db(sequelize.models.supervisors_branches);
                let [supervisor_branches, err3] = await instance3.findOne({where: {supervisor_id: req.appUser.id, status: 1}})
                req.appSupervisorBranches = supervisor_branches

            }
            else if (req.appUser.role == "employee")
            {

                let instance2 = new sequelize.db(sequelize.models.employees_detail);
                let [employee_detail, err2] = await instance2.findOne({where: {employee_id: req.appUser.id, status: 1}})
                req.appEmployee = employee_detail


                let instance = new sequelize.db(sequelize.models.organizations);
                let [organization, err] = await instance.findOne({where: {id: req.appEmployee.organization_id, status: 1}})
                req.appOrganization = organization

            }


            req.authorization = authorization;
            req.enc_password = String(authorization.password_token).trim();
        }
        return next();
    }
    catch(error){return next(error);}
};
