const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  console.log('request made')

  // ** set header content type
  response.setHeader('Content-Type', 'text/html')

  // send a html file
  fs.readFile('./views/index.html', (error, data) => {
    if (error) {
      console.log(error)
    } else {
      // response.write(data)
      // response.end()
      response.end(data)
    }
  })

})

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
})