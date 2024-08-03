const express = require('express')
const router = express.Router()

const users = require('../controller/userController')
const posts = require('../controller/postController')
const tags = require('../controller/tagController')
const profiles = require('../controller/profileController')
const postTag = require('../controller/postTagController')




router.get('/users',users.getUser);
router.post('/users',users.postUser);
router.get('/users/:id',users.getUserById);
router.put('/users/:id',users.updateUser);
router.delete('/users/:id',users.deleteUser);

router.get('/posts',posts.getPost)
router.post('/posts',posts.createPost)
router.get('/posts/:id',posts.getByIdPost)
router.put('/posts/:id',posts.updatePost)
router.delete('/posts/:id',posts.deletePost)

router.get('/tags',tags.getTag)
router.post('/tags',tags.createTag)
router.get('/tags/:id',tags.getByIdTag)
router.put('/posts/:id',tags.updateTag)
router.delete('/posts/:id',tags.deleteTag)

router.get('/profiles',profiles.getProfile)
router.post('/profiles',profiles.createProfile)
router.get('/profiles/:id',profiles.getByidProfile)
router.put('/profiles/:id',profiles.updateProfile)
router.delete('/profiles/:id',profiles.deleteProfile)

router.get('/post-tag',postTag.getPostTag)
router.post('/post-tag',postTag.createPostTag)
router.get('/post-tag/:id',postTag.getByIdPostTag)
router.put('/post-tag/:id',postTag.updatePostTag)
router.delete('/post-tag/:id',postTag.deletePostTag)


module.exports = router