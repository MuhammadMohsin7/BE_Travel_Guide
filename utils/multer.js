const path = require("path");
const multer = require("multer");
const mime = require("mime-types");
// require('../uploads')
//--//

const upload_profile_image = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb){cb(null, __dirname + "../../uploads");},
        filename: function(req, file, cb){cb(null, Date.now() + "_" + Math.random().toString(36).substring(2) + "." + mime.extension(file.mimetype));}
    }),
    fileFilter: function(req, files, callback){
        let ext = path.extname(files.originalname);
        ext = String(ext).trim().toLowerCase();
        let allowed = [".jpg", ".jpeg", ".png"];
        if(!allowed || !allowed.length){return callback(null, true);}
        else if(allowed.toString().indexOf(ext) > -1){return callback(null, true);}
        else{return callback(new Error('Incorrect File Format'));}
    },
    limits: {fileSize: 50 * 1024 * 1024}
});



const uploader = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb){cb(null, __dirname + "../../uploads");},
        filename: function(req, file, cb){cb(null, Date.now() + "_" + Math.random().toString(36).substring(2) + "." + mime.extension(file.mimetype));}
    }),
    fileFilter: function(req, files, callback){
        let ext = path.extname(files.originalname);
        ext = String(ext).trim().toLowerCase();
        let allowed = [".jpg", ".jpeg", ".png", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".csv"];
        if(!allowed || !allowed.length){return callback(null, true);}
        else if(allowed.toString().indexOf(ext) > -1){return callback(null, true);}
        else{return callback(null, false);}
    },
    limits: {fileSize: 50 * 1024 * 1024}
});



const uploaderCertificate = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb){cb(null, __dirname + "../../certificates_templates_images");},
        filename: function(req, file, cb){cb(null, Date.now() + "_" + Math.random().toString(36).substring(2) + "." + mime.extension(file.mimetype));}
    }),
    fileFilter: function(req, files, callback){
        let ext = path.extname(files.originalname);
        ext = String(ext).trim().toLowerCase();
        let allowed = [".jpg", ".jpeg", ".png", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".csv"];
        if(!allowed || !allowed.length){return callback(null, true);}
        else if(allowed.toString().indexOf(ext) > -1){return callback(null, true);}
        else{return callback(null, false);}
    },
    limits: {fileSize: 50 * 1024 * 1024}
});

//--//
module.exports = {uploader: uploader, uploaderCertificate: uploaderCertificate, upload_profile_image: upload_profile_image};
