const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  console.log('request made')

  // ** set header content type
  response.setHeader('Content-Type', 'text/html')

  let path = './views/'
  switch(request.url) {
    case '/':
      path += 'index.html'
      break
    case '/about':
      path += 'about.html'
      break
    default:
      path += '404.html'
      break
  }

  // send a html file
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error)
    } else {
      response.end(data)
    }
  })

})

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
})