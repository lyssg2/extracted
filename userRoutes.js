const router = require('express').Router()
const { User } = require('../models/index.js')


router.post('/signup', async (req, res) => {
    const newUserData = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }, {raw: true})

    console.log('newUserData', newUserData)
    req.session.save(() => {
        console.log('We saved a new session we r logged in now!!')
        req.session.user_id = newUserData.id;
        res.json({ message: 'You are now logged in!' });
    })    
})

router.post('/login', async (req, res) => {
    console.log('WE SMACKED LOGIN ROUTE!!!')

    const userData = await User.findOne({ where: { email: req.body.email } });

    if(!userData){
        res.json({error: 'user not found'})
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if(validPassword === false ){
        res.json({error: 'password wrong'})
    }
    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

        res.json(userData)
    });

})

router.post('/logout', async (req, res) => {
    if (req.session.user_id) {
        console.log('session logout file', req.session)
        req.session.destroy(() => {
            res.json({ message: 'Just signed you logged out' })
        });
    } else {
        res.json({ message: 'you are already logged out' })
    }

    console.log('WE SMACKED Logout ROUTE!!!')
})



module.exports = router;
