const strings = require("./../utils/strings");
const server_config = require("./../config/server");
//--//
const moment = require('moment')
//const PUSH = require("./../helpers/fcm_push");
const twillio = require("./../helpers/twillio");
const sendMail = require("./../helpers/send_mail");
const filter_ids = require("./../utils/filter_csv_ids");
//--//
let dbInstance = require("./instance");
const { sequelize, connection } = require("./connection");
const Op = sequelize.Op;
//--//
const toLowerCase = function (str) {
    return String(str).toLowerCase();
};
const array_chunks = function (array, size) {
    let results = [];
    while (array.length) { results.push(array.splice(0, size)); }
    return results;
};
const uc_words = function (str) { return String(str).trim().toLowerCase().replace(/\b[a-z]/g, function (s) { return s.toUpperCase(); }); };
//--//
const employeeAccessRoles = ["employee"];
const supervisorAccessRoles = ["supervisor"];
const adminAccessRoles = ["admin"];
const individualAccessRoles = ["individual"];
const organizationAccessRoles = ["organization"];

//--//



//--//
module.exports = function (db) {
    // db.users.addHook("beforeSave", function (instance) {
    //     instance.email = toLowerCase(instance.email);
    //     instance.phone = String(parseInt(instance.phone));
    // });
    // db.users.addHook("beforeCreate", function (instance) {
    //     instance.hashPassword();
    //     instance.hashConfirmPassword();
    // });
    // db.users.addHook("beforeUpdate", function (instance) {
    //     if (instance.changed("password")) {
    //         instance.hashPassword();
    //         instance.hashConfirmPassword();
    //     }
    // });
};