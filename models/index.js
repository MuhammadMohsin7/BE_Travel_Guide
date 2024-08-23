const sequelize = require('../config/database');
const User = require('./user');
const Category = require('./category');
const BlogPost = require('./blogPost');

Category.hasMany(BlogPost, { foreignKey: 'categoryId', as: 'blogs' });
BlogPost.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

module.exports = { User, Category, BlogPost };
