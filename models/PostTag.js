const {sequelize} = require('../db')
const { DataTypes }= require('sequelize')
const {Post} = require('../models/Post')
const {Tag} = require('../models/Tag')

const PostTag = sequelize.define('PostTag',{
    postId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Posts',
            key:'id'
        }
    },
    tagId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Tags',
            key:'id'
        }
    }
},{
    timestamps:true
});

Post.belongsToMany(Tag,{through:PostTag})
Tag.belongsToMany(Post,{through:PostTag})

PostTag.sync({force:false})

module.exports ={
    PostTag
}