const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
  res.render('users.ejs')
})

router.get('/login', (req, res) => {
  res.send('login page')
})

module.exports = router
