const { Router } = require('express')
const router = Router()

const models = require( '../models');

router.get('/', async (req, res) => {
    const products = await models.Product.findAll()

    res.json(products)
})

router.post('/new', async (req, res) => {
    let product = req.product

    res.json("Save success!")
})

module.exports = router