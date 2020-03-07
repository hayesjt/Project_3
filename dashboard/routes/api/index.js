const router = require('express').Router();
const datas = require('./datas')
const users = require('./users')

router.use('/datas', datas)
router.use('/users', users)

module.exports = router;