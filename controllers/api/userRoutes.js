const router = require('express').Router()

// GET login route

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/homepage')
        return
    }
    res.render('login-page')
})

// GET signup route

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/homepage')
        return
    }

    res.render('signup')
})


// Delete route

router.delete('/', async (req, res) => {
    try {

    } catch {

    }
})



module.exports = router