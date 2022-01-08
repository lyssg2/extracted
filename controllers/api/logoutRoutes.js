const router = require('express').Router()

// logout Delete route

router.post('/', async (req, res) => {
    try {
        if (req.session.user_id) {
            req.session.destroy(() => {
                res.json({ message: 'Just logged you out' })
            })
            res.render('logout', {
                loggedIn: false
            })
        } else {
            res.json({ message: 'you are already logged out' })
        }
    } catch (err) {
        res.json(err)
    }
})

module.exports = router