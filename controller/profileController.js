const { Profile } = require('../models/Profile')

const getProfile = async (req, res) => {
    try {
        const profiles = await Profile.findAll()

        if (!profiles) {
            res.status(404).json({
                message: "Record Not Found"
            })
        }

        res.status(200).json({
            data: profiles
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const createProfile = async (req, res) => {
    try {
        const { bio, userId } = req.body

        const profiles = await Profile.create({
            'bio': bio,
            'userId': userId,
        })

        res.status(200).json({
            data: profiles,
            message: "Created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getByidProfile = async (req, res) => {
    try {
        const profiles = await Profile.findByPk(req.params.id)

        if (!profiles) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        res.status(200).json({
            data: profiles
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateProfile = async (req, res) => {
    try {
        const profiles = await Profile.findByPk(req.params.id)

        if (!profiles) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        const { bio, userId } = req.body

        await profiles.update({
            'bio': bio,
            'userId': userId
        })

        res.status(200).json({
            data: profiles,
            message: "Updated Successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteProfile = async(req,res)=>{
    try {
        const profiles = await Profile.findByPk(req.params.id)

        if(!profiles){
            res.status(404).json({
                message:"Id Not Found"
            })
        }

        await profiles.destroy()

        res.status(200).json({
            message:"Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports ={
    getProfile,
    createProfile,
    getByidProfile,
    updateProfile,
    deleteProfile
}