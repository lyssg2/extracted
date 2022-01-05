const router = require('express').Router()
const htmlRoutes = require('./htmlRoutes')
const coffeeShopRoutes = require('./api/coffeeShopRoutes')
const reviewRoutes = require('./api/reviewRoutes')
const userRoutes = require('./api/userRoutes')

router.use('/', htmlRoutes)
router.use('/shop', coffeeShopRoutes)
router.use('/review', reviewRoutes)
router.use('/login', userRoutes)

module.exports = router