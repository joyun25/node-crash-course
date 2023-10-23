const http = require('http')

const server = http.createServer((request, response) => {
  console.log('request made')

  // ** set header content type
  // ** text/plain
  // response.setHeader('Content-Type', 'text/plain')
  // response.write('hello ninjas')
  // response.end()

  // ** text/html
  response.setHeader('Content-Type', 'text/html')
  response.write('<head><link rel="stylesheet" href=""></head>')
  response.write('<h1>hello ninjas</h1>')
  response.end()
})

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
})