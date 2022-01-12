const router = require('express').Router()
const Shop = require('../../models/Shop')
const User = require('../../models/User')
const Review = require('../../models/Review')

// GET route

router.get('/', async (req, res) => {

    try {
        const allShops = await Shop.findAll({ raw: true })

        res.status(200).render('shop-page', { allShops })
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/:id', async (req, res) => {

    try {
        const oneShop = await Shop.findByPk({
            where: { id: req.params.id }
        })
        res.status(200).render('review', { oneShop })
    } catch (err) {
        res.status(400).json(err)
    }
})

// show all reviews on shop page
router.get('/review', async (req, res) => {

    try {
        const reviewData = await Review.findAll({})

        // Serializes data to pass through template
        const reviews = reviewData.map((review) => review.get({ plain: true }));

        res.status(200).render('review', reviews)
    } catch (err) {
        res.status(400).redirect('review')
    }
})

module.exports = router