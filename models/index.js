const Favorite = require('./Favorite');
const User = require('./User');

User.hasMany(Favorite);
Favorite.belongsTo(User);

module.exports = {User, Favorite}