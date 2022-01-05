const router = require('express').Router()
const { User } = require('../../models');

// GET login route

router.get('/login', async(req, res) => {
    if (req.session.logged_in) {
        res.redirect('/homepage')
        return
    }

    res.render('login-page')
})

// GET signup route

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/homepage')
        return
    }

    res.render('signup')
})

// signup POST route 

router.post('/signup', async(req, res) => {
    const newUserData = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }, { raw: true })

    req.session.save(() => {
        req.session.user_id = newUserData.id;
        res.json({ message: 'You are now logged in!' })
    })
})

// login POST route

router.post('/login', async(req, res) => {

    const userData = await User.findOne({ where: { email: req.body.email } })

    if (!userData) {
        res.json({ error: 'user not found' })
    }

    const validPassword = await userData.checkPassword(req.body.password)

    if (validPassword === false) {
        res.json({ error: 'password wrong' })
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
        req.session.user_id = userData.id
        req.session.logged_in = true

        res.json(userData)
    })
})

// logout Delete route

router.post('/logout', async(req, res) => {
    if (req.session.user_id) {
        console.log('session logout file', req.session)
        req.session.destroy(() => {
            res.json({ message: 'Just signed you logged out' })
        })
    } else {
        res.json({ message: 'you are already logged out' })
    }

    console.log('WE SMACKED Logout ROUTE!!!')
})

module.exports = router