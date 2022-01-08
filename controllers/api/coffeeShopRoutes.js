const router = require('express').Router()
const Shop = require('../../models/Shop')

// GET route

router.get('/', async (req, res) => {

    const allShops = await Shop.findAll({ raw: true })
    res.render('shop-page', { allShops })
})

module.exports = router
