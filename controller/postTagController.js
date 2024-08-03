const { PostTag } = require('../models/PostTag')

const getPostTag = async (req, res) => {
    try {
        const postTag = await PostTag.findAll()

        if (!postTag) {
            res.status(404).json({
                message: "Record Not Found"
            })
        }

        res.status(200).json({
            data: postTag
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const createPostTag = async (req, res) => {
    try {
        const { tagId, postId } = req.body

        const postTag = await PostTag.create({
            'tagId': tagId,
            'postId': postId
        })

        res.status(200).json({
            data: postTag,
            message: "Created Succesfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.mesage
        })
    }
}

const getByIdPostTag = async (req, res) => {
    try {
        const postTag = await PostTag.findByPk(req.params.id)

        if (!postTag) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        res.status(200).json({
            data: postTag
        })
    } catch (error) {
        res.status(500).json({
            message: error.mesage
        })
    }
}

const updatePostTag = async (req, res) => {
    try {
        const postTag = await PostTag.findByPk(req.params.id)

        if (!postTag) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        const { tagId, postId } = req.body

        await postTag.update({
            'tagId': tagId,
            'postId': postId
        })

        res.status(200).json({
            data: postTag,
            message: "Updated Successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.mesage
        })
    }
}

const deletePostTag = async (req, res) => {
    try {
        const postTag = await PostTag.findByPk(req.params.id)

        if (!postTag) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        await postTag.destroy();

        res.status(200).json({
            message: "Deleted Successfully"
        })

    } catch (error) {
        res.status(500).json({
            mesage: error.message
        })
    }
}

module.exports = {
    getPostTag,
    createPostTag,
    getByIdPostTag,
    updatePostTag,
    deletePostTag
}