const multer = require("multer");
const responseH = require("./../utils/response");
const Exception = require("./../utils/exceptions");
const sequelize = require("./../sequelize/sequelize");
const constantEn = require("./../utility/locals/constantEnglish")
const constantAr = require("./../utility/locals/constantArabic")
//--//
const uc_words = function(str){return String(str).trim().toLowerCase().replace(/\b[a-z]/g, function(s){return s.toUpperCase();});};
const setField = function(field){
    field = String(field || "").trim();
    field = field.replace("_", " ");
    field = field.replace("_", " ");
    return field;
};
const setErrorMessage = function(error){
    let message;
    if(error && error["validatorKey"]){
        let key = String(error["validatorKey"]);
        let path = uc_words(setField(error.path));
        let value = String(error["value"]);
        switch(key){
            case "min":
                message = `Please enter positive integer value for ${path}`;
                break;
            case "isIn":
                message = `Please enter valid value for ${path}`;
                break;
            case "isInt":
                message = `Please enter valid integer value for ${path}`;
                break;
            case "isDate":
                message = `Please enter valid date for ${path}`;
                break;
            case "notNull":
                message = `${path} is required, and can not be empty`;
                break;
            case "isEmail":
                message = `Please enter valid email address for ${path}`;
                break;
            case "isUnique":
               // message = `${path} '${value}' is already taken`;
                message = `This ${path} is already linked with another user`;
                break;
            case "notEmpty":
                message = `${path} can not be empty`;
                break;
            default:
                message = error.message;
                break;
        }
    }
    return message;
};
//--//
module.exports = async function(data, req, res, next){
    let console_error = true;
    let response = new responseH();
    //--//
    if(data && !isNaN(data))
    {      
        response.setError(data, Exception(data), data);
        console_error = false;
    }
    else if(data && data instanceof sequelize.sequelize.ValidationError){
        console_error = false;
        let error = data.errors[0];
        response.setError(error, Exception(422), 422);
        response.message = error.message;
        response.message = setErrorMessage(error);
    }
    else if(data && data instanceof sequelize.sequelize.ValidationErrorItem){
        console_error = false;
        let error = data.errors[0];
        response.setError(error, Exception(422), 422);
        response.message = error.message;
        response.message = setErrorMessage(error);
    }
    else if(data && data instanceof sequelize.sequelize.SequelizeScopeError){
        response.setError(data, Exception(400), 400);
    }
    else if(data && data instanceof sequelize.sequelize.DatabaseError){
        response.setError(data, Exception(400), 400);
    }
    else if(data && data instanceof sequelize.sequelize.InstanceError){
        response.setError(data, Exception(400), 400);
    }
    else if(data && data instanceof multer.MulterError){
        response.setError(data, Exception(411), 411);
    }
    else if(data && data instanceof sequelize.sequelize.BaseError){
        response.setError(data.message, Exception(500), 500);
    }
    else if(data && data instanceof Error){
        response.setError(data.message, Exception(500), 500);
    }
    else
    {
        let responseMessage = req.query.lang === "ar" ? constantAr(data.message) : constantEn(data.message);
        let statusCode = data.statusCode || 200
        let status = data.status || "success"

        delete data.message
        delete data.statusCode
        delete data.status
        // added by usman for validation error message change
        if(data.data)
        {
            data = data.data
        }
        data = Object.keys(data).length === 0 ? null : data

        response.setSuccess(data, responseMessage, statusCode, status);
        console_error = false;
    }
    //--//
    if(response.status === "error"){
        if(console_error){console.log(data);}
    }
    //--//
    response.sendRes(req, res);
    return next();
};
