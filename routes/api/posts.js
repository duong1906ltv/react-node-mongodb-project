const express = require('express')
const router = express.Router()
const {check, validationResult} = require('express-validator')
const auth = require('../../middleware/auth')
const Post = require('../../models/Post')
const Users = require('../../models/Users')

// @route POST  api/posts
// @desc       Createa post
// @acess       Private

router.post(
    '/',
    [
        auth,
        [
            check('text', 'Text is required')
                .not()
                .isEmpty()
        ]
    ],
    async (req,res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            const user = await Users.findById(req.user.id).select('-password')

            const newPost = new Post({
                text: req.body.text,
                name: user.name,
                avatar: user.avatar,
                user: req.user.id
            })
            
            const post = await newPost.save()
            
            res.json(post)

        } catch (error) {
            console.error(error.message)
            res.status(500).send(' Server Error')
        }
})

module.exports = router