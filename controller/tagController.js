const { Post } = require('../models/Post');
const { Tag } = require('../models/Tag')


const getTag = async (req, res) => {
    try {
        const tags = await Tag.findAll({include:[Post]});

        if (!tags.length > 0) {
            return res.json(404).json({
                message: "Record Not Found"
            })
        } else {
            return res.status(200).json({
                data: tags
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const createTag = async (req, res) => {
    try {
        const { name } = req.body

        const tags = await Tag.create({
            'name': name,
        })

        res.status(200).json({
            data: tags,
            message: "Created Successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getByIdTag = async (req, res) => {
    try {
        const tags = await Tag.findByPk(req.params.id,{include:[Post]})

        if (!tags) {
            res.status(404).json({
                message: "Id Not Found"
            })
        } else {
            res.status(200).json({
                data: tags
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateTag = async (req, res) => {
    try {
        const tags = await Tag.findByPk(req.params.id)

        if (!tags) {
            res.status(404).json({
                message: 'Id Not Found'
            })
        }

        const { name } = req.body

        await tags.update({
            'name': name,
        })

        res.status(200).json({
            data: tags,
            message: "Updated Succesfully"
        })


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteTag = async (req, res) => {
    try {
        const tags = await Tag.findByPk(req.params.id)

        if (!tags) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        await tags.destroy()

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
    getTag,
    createTag,
    getByIdTag,
    updateTag,
    deleteTag
}