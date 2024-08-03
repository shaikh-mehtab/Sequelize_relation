const {sequelize} = require('../db')
const { DataTypes } = require('sequelize')

const Tag = sequelize.define('Tag',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
},{
    timestamps:true,
});

Tag.sync({force:false})

module.exports ={
    Tag
}