let {config, sequelize, connection} = require("./connection");
//--//
let models = {
    users: (require("./../schemas/users"))(connection, sequelize),
    admins: (require("./../schemas/admins"))(connection, sequelize),
    categories: (require("./../schemas/categories"))(connection, sequelize),
    posts: (require("./../schemas/posts"))(connection, sequelize),

};
//--//
(require("./hooks"))(models);
(require("./scopes"))(models);
(require("./associations"))(models);
//--//
let instance = require("./instance");
module.exports = {
    config,
    sequelize,
    connection,
    models,
    db: instance
};
