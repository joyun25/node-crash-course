const express = require('express')

// express app
const app = express()

// listen for requests
app.listen(3000)

app.get('/', (req, res) => {
  // res.send('<h1>home page</h1>')
  res.sendFile('./views/index.html', { root: __dirname }) // default is an absolute path
})

app.get('/about', (req, res) => {
  // res.send('<h1>about page</h1>')
  res.sendFile('./views/about.html', { root: __dirname })
})