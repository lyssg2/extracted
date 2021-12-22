const router = require('express').Router()

router.post('/save', async (req, res) => {
    console.log('stuff from form', req.body)

    // const justSaved = await Todo.create(req.body)

    // res.json(justSaved)
})

module.exports = router