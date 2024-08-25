const crypto = require("crypto");
module.exports = function(sequelize, DataTypes){
    let isUnique = function(field){
        return function(value, next){
            let Model = sequelize.models.categories;
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
    let Model = sequelize.define("categories", {
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
        description: {
            type: DataTypes.STRING,
             allowNull: true,
             defaultValue: null,
        },
       
        status: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: true,
            defaultValue: 1
        },
       
        
    }, {
        tableName: "categories",

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
