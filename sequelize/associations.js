
module.exports = function (db) {
    // db.users.hasOne(db.authorizations, { foreignKey: "user_id" });
    // db.authorizations.belongsTo(db.users, { foreignKey: "user_id" });
    //--//
    db.posts.hasOne(db.categories, { foreignKey: "id" });
    db.categories.hasMany(db.posts, { foreignKey: "category_id" });


};
