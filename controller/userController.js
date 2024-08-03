const { Profile } = require('../models/Profile');
const {User} = require('../models/User');
const {Post} = require('../models/Post')

const getUser = async (req, res) => {
    try {
        const users = await User.findAll({include:[Profile,Post]});

        if (!users.length>0) {
            return res.json(404).json({
                message: "Record Not Found"
            })
        } else {
           return res.status(200).json({
                data: users
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const postUser = async (req, res) => {
    try {
        const { firstName, lastname } = req.body

        const users = await User.create({
            'firstName': firstName,
            'lastname': lastname,
        })

        res.status(200).json({
            data: users,
            message:"Created Successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getUserById = async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id,{include:Profile})

        if (!users) {
            res.status(404).json({
                message: "Id Not Found"
            })
        } else {
            res.status(200).json({
                data: users
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id)

        if (!users) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        const { firstName, lastname } = req.body

        await users.update({
            'firstName': firstName,
            'lastname': lastname,
        })

        res.status(200).json({
            data: users,
            message:"Updated Successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteUser = async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id)

        if (!users) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        await users.destroy()

        res.status(200).json({
            message: "Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getUser,
    postUser,
    getUserById,
    updateUser,
    deleteUser
}