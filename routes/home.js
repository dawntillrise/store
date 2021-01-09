const { Router } = require('express')
const router = Router()

const models = require( '../models');

router.get('/', async (req, res) => {
    const users = await models.User.findAll()
    console.log(users)
    res.render('home/index.template', {
        title: "Store",
        users: users
    })
})

module.exports = router