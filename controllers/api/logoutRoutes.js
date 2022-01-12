const router = require('express').Router()

// logout Delete route

router.post('/', async (req, res) => {
    try {
        if (req.session.user_id) {
            req.session.destroy(() => {
                res.status(200).json({ message: 'Just logged you out' })
            })
        } else {
            res.status(200).json({ message: 'you are already logged out' })
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router