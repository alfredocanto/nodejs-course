const { Router } = require('express')
const router = Router()

router.get('/home', (req, res) => {
  const title = 'Titulo 2'
  res.render('index.ejs', {
    title: 'mi pagina',
  }) //vista configurada en index.js
})
module.exports = router
