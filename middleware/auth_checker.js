module.exports = function(access){
    return function(req, res, next){
        try{
            access = String(access).trim().toLowerCase().split(",");
            if(!access || !access.length){return next();}
            let isGuestUser = (!req.appUser || !req.appUser.id);
            if(access.includes("?") && isGuestUser){return next();}
            if(access.includes("@") && !isGuestUser){return next();}
            if(isGuestUser){return next(403);}
            let role = String(req.appUser.role).trim().toLowerCase();
            if(!access.includes(role)){return next(403);}
            return next();
        }
        catch(error){return next(error);}
    };
};
