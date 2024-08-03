const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('seq', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const ConnectToDb = async ()=> {
    try {
        await sequelize.authenticate();
        console.log('Coneccted To Databace Successfully');
    } catch (error) {
        console.error('Unable To Connect To The Database');
    }

}


module.exports = {
    sequelize,ConnectToDb
}