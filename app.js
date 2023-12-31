const express = require('express')
const morgan = require('morgan')

// express app
const app = express()

// register view engine
app.set('view engine', 'ejs')

// listen for requests
app.listen(3000)

// middleware & static files
app.use(express.static('public')) // Express makes files in the "public" folder accessible to the browser

app.use(morgan('dev'))

app.get('/', (req, res) => {
  const blogs = [
    {
      title: 'Yoshi finds eggs',
      snippet: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      title: 'Mario finds starts',
      snippet: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      title: 'How to defeat mushrooms',
      snippet: 'Lorem ipsum dolor sit amet consectetur'
    }
  ]
  res.render('index', {
    title: 'Home',
    blogs
  })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new Blog' })
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})