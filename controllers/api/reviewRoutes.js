const router = require('express').Router()
const Review = require('../../models/Review')
const Shop = require('../../models/Shop')
const NewShop = require('../../models/NewShop')
const withAuth = require('../../utils/auth')


console.log('review routes page smacked')
    // GET route

router.get('/', withAuth, async(req, res) => {

    console.log('coffee shop get smacked')
    const oneShop = await Shop.findAll({
        raw: true,
        where: {
            id: 1
        },
    })
    res.render('review', { oneShop })
})

// add review POST route

router.post('/review', withAuth, async(req, res) => {
    console.log('review post route smacked')
    try {
        const newReviewData = await Review.create({
            ...req.body,
            user_id: req.session.user_id,
        })

        res.status(200).json(newReviewData)

        // reviewName: req.body.reviewName,
        // review: req.body.review,
        // user_id: req.session.user_id,
        // shop_id: 1,
    } catch (err) {
        res.status(400).json(err)
    }
})

// show all reviews on shop page
router.get('/review', async(req, res) => {

    console.log('review get route smacked')
    try {
        const reviewData = await Review.findAll({
            include: [User],
            where: { 'user_id': req.session.user_id },
        });

        console.log(reviewData)

        // Serializes data to pass through template
        const reviews = reviewData.map((review) => review.get({ plain: true }));

        res.render('review', {
            reviews
        });
    } catch (err) {
        res.redirect('review');
    }
})

// add new shop POST route

router.post('/add/newshop', async(req, res) => {
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