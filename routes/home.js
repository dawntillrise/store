const { Router } = require('express')
const router = Router()

const models = require( '../models');

router.get('/', async (req, res) => {
    const users = await models.User.findAll()
    res.render('home/index', {
        title: "Store",
        users
    })
})

module.exports = router