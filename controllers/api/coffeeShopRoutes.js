const router = require('express').Router()
const Shop = require('../../models/Shop')

// GET route

router.get('/', async (req, res) => {

    const allShops = await Shop.findAll({ raw: true })
    res.render('shop-page', { allShops })
})

router.get('/:id', async (req, res) => {

    const oneShop = await Shop.findByPk({
        where: {
            id: req.params.id
        }
    })
    res.render('review', { oneShop })
})

module.exports = router