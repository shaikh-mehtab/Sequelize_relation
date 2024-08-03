const { Post } = require('../models/Post');
const {Tag} = require('../models/Tag')


const getPost = async (req, res) => {
    try {
        const posts = await Post.findAll({include:[Tag]})

        if (!posts.length > 0) {
            res.status(404).json({
                message: "Record Not Found"
            })
        } else {
            res.status(200).json({
                data: posts
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body

        const users = await Post.create({
            'title': title,
            'content': content,
            'userId': userId
        })

        res.status(200).json({
            data: users,
            message: "Created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getByIdPost = async (req, res) => {
    try {
        const posts = await Post.findByPk(req.params.id,{include:[Tag]})

        if (!posts) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        res.status(200).json({
            data: posts
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updatePost = async (req, res) => {
try {
    const posts = await Post.findByPk()

    if (!posts) {
        res.status(404).json({
            message: "Id Not Found"
        })
    }

    const { title, content, userId } = req.body

    await posts.update({
        'title': title,
        'content': content,
        'userId': userId
    })

    res.status(200).json({
        data:posts
    })

} catch (error) {
    res.status(500).json({
        message: error.message
    })
}
}

const deletePost = async (req, res) => {
    try {
        const posts = await Post.findByPk(req.params.id)

        if (!posts) {
            res.status(404).json({
                message: "Id Not Found"
            })
        }

        await posts.destroy()

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
    getPost,
    getByIdPost,
    createPost,
    updatePost,
    deletePost
}