const {sequelize} = require('../db')
const { DataTypes } = require('sequelize');
const { Profile } = require('./Profile');
const { Post } = require('./Post');

const User = sequelize.define('User',{
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:true,
    }
},{
    timestamps:true,
});

User.hasOne(Profile,{foreignKey:'userId'});
Profile.belongsTo(User,{foreignKey: 'userId'});

User.hasMany(Post,{foreignKey:'userId'});
Post.belongsTo(User,{foreignKey:'userId'});

User.sync({force:false});

module.exports ={ User};

