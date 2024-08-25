const crypto = require("crypto");
module.exports = function(sequelize, DataTypes){
    let isUnique = function(field){
        return function(value, next){
            let Model = sequelize.models.posts;
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
    let Model = sequelize.define("posts", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        meta_title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        meta_keywords: {
            type: DataTypes.STRING,
            allowNull: true
        },
        meta_description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        published_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        main_image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        secondary_image_1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        secondary_image_2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        secondary_image_3: {
            type: DataTypes.STRING,
            allowNull: true
        },
        secondary_image_4: {
            type: DataTypes.STRING,
            allowNull: true
        },
        secondary_image_5: {
            type: DataTypes.STRING,
            allowNull: true
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categories', // Name of the table
                key: 'id'
            }
        },
        status: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true,
            defaultValue: 1
        },
       
        
    }, {
        tableName: "posts",

    });
    //--//
    Model.prototype.toJSON = function(options){
        let attributes = Object.assign({}, this.get());
        delete attributes.password;
        delete attributes.confirm_password;
        return attributes;
    };

  
    return Model;
};
