const { Router } = require('express')
const router = Router()
const axios = require('axios')

router.get('/', (req, res) => {
  let isActive = true
  const users = [
    {
      id: 1,
      name: 'ryan',
      lastname: 'perez',
    },
    {
      id: 2,
      name: 'joe',
      lastname: 'millan',
    },
    {
      id: 3,
      name: 'mac',
      lastname: 'rodriguez',
    },
  ]

  res.render('home.ejs', {
    title: 'Welcome!',
    isActive,
    users,
  })
})

router.get('/about', (req, res) => {
  res.render('about.ejs')
})

router.get('/dashboard', (req, res) => {
  res.render('dashboard.ejs')
})

router.get('/posts', async (req, res) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  res.render('posts', {
    posts: response.data,
  })
})

module.exports = router
