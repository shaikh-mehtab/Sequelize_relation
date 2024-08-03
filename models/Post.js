const {sequelize} = require('../db');
const { DataTypes } = require('sequelize');

const Post = sequelize.define('Post',{
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Users',
            key:'id'
        }
    }
},{
    timestamps:true
});

Post.sync({force:false});

module.exports ={
    Post
}