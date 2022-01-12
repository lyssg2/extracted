const router = require('express').Router()
const Review = require('../../models/Review')
const Shop = require('../../models/Shop')
const NewShop = require('../../models/NewShop')
const withAuth = require('../../utils/auth')

// GET route

router.get('/', withAuth, async (req, res) => {

    try {
        const oneShop = await Shop.findAll({
            raw: true,
            where: { id: 1 },
        })

        const reviews = await Review.findAll({ raw: true })

        res.status(200).render('review', { oneShop, reviews })
    } catch (err) {
        res.status(400).json(err)
    }
})

// add review POST route

router.post('/', withAuth, async (req, res) => {

    try {
        const newReviewData = await Review.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(newReviewData)
    } catch (err) {
        res.status(400).json(err)
    }
})

// add new shop POST route

router.post('/add/newshop', async (req, res) => {
    try {
        const newShopData = await NewShop.create({
            newShopName: req.body.newShopName,
            newShopNeighborhood: req.body.newShopNeighborhood,
            newShopCity: req.body.newShopCity,
            newShopDescription: req.body.newShopDescription,
            user_id: req.session.user_id
        }, { raw: true })
        res.status(200).json(newShopData)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router