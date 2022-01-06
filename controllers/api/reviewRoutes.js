const router = require('express').Router()
const { Review } = require('../../models');

// GET route

router.get('/', async (req, res) => {

    res.render('review')
})

// add review POST route

router.post('/add', async(req, res) => {
    const newReviewData = await Review.create({
        id: "placeholder, could use an id generator?",
        reviewName: req.body.reviewName,
        review: req.body.review,
        user_id: req.session.user_id,
        shop_id: req.session.shop_id,
    }, { raw: true })
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