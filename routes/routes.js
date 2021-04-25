const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ status: 200, message: 'Server Up and Running...' })
})

router.use('/api/users', require('./user'))
router.use('/api/connection', require('./connection'))
router.use('/api/crush', require('./crush'))
router.use('/api/match', require('./match'))



module.exports = router