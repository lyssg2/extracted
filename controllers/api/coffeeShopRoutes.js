const router = require('express').Router()
const Shop = require('../../models/Shop')

// GET route

router.get('/', async(req, res) => {

    const allShops = await Shop.findAll({ raw: true })
    res.render('shop-page', { allShops })
})

router.get('/:id', async(req, res) => {

    const oneShop = await Shop.findByPk({
        where: {
            id: req.params.id
        }
    })
    res.render('review', { oneShop })
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

module.exports = router