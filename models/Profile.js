const {sequelize} = require('../db')
const { DataTypes, } = require('sequelize');

const Profile = sequelize.define('Profile',{
    bio:{
        type:DataTypes.TEXT,
        allowNull:true,
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

Profile.sync({force:false})

module.exports={
    Profile
}