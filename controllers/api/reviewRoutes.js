const router = require('express').Router()
const Review = require('../../models/Review')
const NewShop = require('../../models/NewShop')
const withAuth = require('../../utils/auth')

// GET route

router.get('/', async (req, res) => {

    res.render('review')
})

// add review POST route

router.post('/add', async (req, res) => {
    const newReviewData = await Review.create({
        reviewName: req.body.reviewName,
        review: req.body.review,
        user_id: req.session.user_id,
        shop_id: req.session.shop_id,
    }, { raw: true })
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

        res.json(newShopData)
    } catch (err) {
        res.json(err)
    }
})

module.exports = router