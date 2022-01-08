const router = require('express').Router()

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        console.log('already logged in')
        return
    }

    res.render('logout')
})

// logout Delete route

router.post('/', async(req, res) => {
    if (req.session.user_id) {
        req.session.destroy(() => {
            res.json({ message: 'Just signed you logged out' })
        })
        res.render('logout', {
            loggedIn: false
        })
    } else {
        res.json({ message: 'you are already logged out' })
    }

    console.log('WE SMACKED Logout ROUTE!!!')
})

module.exports = router