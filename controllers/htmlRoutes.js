const router = require('express').Router()

router.get('/', async (req, res) => {

    res.send('home')
})

module.exports = router