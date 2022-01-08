const router = require('express').Router()

// Get route

router.get('/', async (req, res) => {

    res.render('homepage')
})

module.exports = router