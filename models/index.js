const User = require('./User');
const Post = require('./Post');
const Inventory = require('./Inventory');
const Comment = require('./Comment')



//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// User.belongsToMany(Post, {
//     through: Vote,
//     as: 'voted_posts',
//     foreignKey: 'user_id'
// });

// Post.belongsToMany(User, {
//     through: Vote,
//     as: 'voted_posts',
//     foreignKey: 'post_id'
// });


User.hasMany(Inventory, {
    foreignKey: 'user_id',
});
Inventory.belongsTo(User, {
    foreignKey: 'user_id'
});


Comment.belongsTo(User, {
    foreignKey: 'user_id',
});
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});



module.exports = { User, Post, Inventory, Comment };