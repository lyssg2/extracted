const router = require('express').Router()
const { User } = require('../../models')

// GET login route

router.get('/', async (req, res) => {

    try {
        if (req.session.logged_in) {
            res.redirect('/')
            return
        }
        res.status(200).render('login')
    } catch (err) {
        res.status(400).json(err)
    }
})

// signup POST route 

router.post('/signup', async (req, res) => {

    try {
        const newUserData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }, { raw: true })

        req.session.save(() => {
            req.session.user_id = newUserData.id;
            res.status(200).json({ message: 'You are now logged in!' })
        })
    } catch (err) {
        res.status(400).json(err)
    }
})

// login POST route

router.post('/', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } })

        if (!userData) {
            res.status(400).json({ error: 'user not found' })
        }

        const validPassword = await userData.checkPassword(req.body.password)

        if (validPassword === false) {
            res.status(400).json({ error: 'password wrong' })
        }

        // Create session variables based on the logged in user
        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.logged_in = true

            res.status(200).json(userData)
        })

    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router