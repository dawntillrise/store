const { Router } = require('express')
const router = Router()

const models = require( '../models');

router.get('/users', async (req, res) => {
    const users = await models.User.findAll()

    res.json(users)
})

router.get('/profile', async (req, res) => {
    var user = req.user

    res.render('profile', {title: 'profile', user: user })
})

module.exports = router