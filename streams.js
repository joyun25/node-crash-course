const fs = require('fs')

// ** the second parameter has the same effect as .toString() at line 16
const readStream = fs.createReadStream(
  './docs/blog3.txt',
  // { encoding: 'utf8' }
)
// ** create new files
// const writeStream_4 = fs.createWriteStream('./docs/blog4.txt')
// const writeStream_5 = fs.createWriteStream('./docs/blog5.txt')
// const writeStream_6 = fs.createWriteStream('./docs/blog6.txt')

readStream.on('data', chunk => {
  // ** see console to check how does a chunk look like
  console.log('------- NEW CHUNK -------')
  console.log(chunk)
  // ** turn the chunk into human readable message
  // console.log(chunk.toString())

  // ** create a new file blog4 and write `NEW CHUNK ${chunk}` in it
  // writeStream_4.write('\nNEW CHUNK\n')
  // writeStream_4.write(chunk)
})

// ** create a new file blog5 and write `NEW CHUNK` in it
// writeStream_5.write('\nNEW CHUNK\n')

// ** piping
// ** copy the content in blog4 to blog6
// readStream.pipe(writeStream_6)