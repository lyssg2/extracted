const router = require('express').Router()
const Shop = require('../../models/Shop')
const Withauth = require('../../utils/auth')

// GET route

router.get('/', Withauth, async (req, res) => {

    const allShops = await Shop.findAll({ raw: true })
    console.log('Shop!', allShops)
    res.render('shop-page', { allShops })
})

// POST route

router.post('/', async (req, res) => {
    try {

    } catch {

    }
})

// PUT route

router.put('/:id', async (req, res) => {
    try {

    } catch {

    }
})

// Delete route

router.delete('/:id', async (req, res) => {
    try {

    } catch {

    }
})



module.exports = router