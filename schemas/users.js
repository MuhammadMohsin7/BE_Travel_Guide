const crypto = require("crypto");
module.exports = function(sequelize, DataTypes){
    let isUnique = function(field){
        return function(value, next){
            let Model = sequelize.models.users;
            let query = {};
            query[field] = value;
            Model.findOne({
                where: query,
                attributes: ["id"]
            }).then(function(obj){
               // if(obj && obj.id){ next(field + ": '" + value + "' is already taken"); }
                if(obj && obj.id){ next("This " +field + " is already linked with another user"); }
                else{ next(); }
            });
        };
    };
    let Model = sequelize.define("users", {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
             allowNull: true,
             defaultValue: null,
        },
        username: {
            type: DataTypes.STRING,
             allowNull: true,
             defaultValue: null,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
            validate: {
                isUnique: isUnique("phone")
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
            validate: {
                isEmail: true,
                isUnique: isUnique("email")
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
            validate: {
                notEmpty: true
            }
        },
        confirm_password: {
            type: DataTypes.VIRTUAL,
            allowNull: true,
            defaultValue: null,
            validate: {
                notEmpty: true
            }
        },
        // profile_image_url: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     defaultValue: null,
        // },

        // otp: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     defaultValue: null,
        // },

        // access_token: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        //     defaultValue: null,
        // },
        status: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true,
            defaultValue: 1
        },
       
        
    }, {
        tableName: "users",

    });
    //--//
    Model.prototype.toJSON = function(options){
        let attributes = Object.assign({}, this.get());
        delete attributes.password;
        delete attributes.confirm_password;
        return attributes;
    };

    Model.prototype.toJSONincludingPassword = function(options){
        let attributes = Object.assign({}, this.get());

        return attributes;
    };
    // Model.prototype.hashPassword = function(){
    //     if(this.password){ this.password = crypto.createHash("sha1").update(this.password).digest("hex"); }
    // };
    // Model.prototype.hashConfirmPassword = function(){
    //     if(this.confirm_password){ this.confirm_password = crypto.createHash("sha1").update(this.confirm_password).digest("hex"); }
    // };
    Model.prototype.validatePassword = function(password){
        password = String(password).trim();
        let passwordHash = crypto.createHash("sha1").update(password).digest("hex");
        let hashedPassword = String(this.password).trim();
        return (passwordHash === hashedPassword);
    };
    return Model;
};
