// ** this is an file system information object in node itself
const fs = require("fs")
// console.log(fs)


// ** reading files
// ** the second parameter (the callback function) will run after the file finish reading the document
// fs.readFile('./docs/blog1.txt', (error, data) => {
//   if(error) {
//     console.log("error", error)
//   }
//   console.log("data", data) // <Buffer 68 65 6c 6c 6f 2c 20 6e 69 6e 6a 61 73>
//   console.log("data.toString()", data.toString()) // hello, ninjas
// })

// console.log('last line') // this line will show before the code in `fs.readFile`, because `fs.readFile` takes a lot of time to run 


// ** writing files
// ** the third parameter (the callback function) will run after the file finish writing the document
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//   console.log('file was written')
// })

// // ** this will a new file when the directory isn't exist 
// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//   console.log('file was written')
// })


// ** directories
// ** this will create a new folder
// fs.mkdir('./assets', (error) => {
//   if(error) {
//     console.log(error)
//   }
//   console.log("folder created")
// })

// ** this will cause an error, because the directory already exists
// fs.mkdir('./docs', (error) => {
//   if(error) {
//     console.log(error)
//   }
//   console.log("folder created")
// })

// ** we can check if the directory exists before we create it, if it is already created, then we delete it
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (error) => {
//     if(error) {
//       console.log(error)
//     }
//     console.log("folder created")
//   })
// }else{
//   fs.rmdir('./assets', (error) => {
//     if(error) {
//       console.log(error)
//     }
//     console.log("folder deleted")
//   })
// }


// ** deleting files
if (fs.existsSync('./docs/deleteme.txt')){
  fs.unlink('./docs/deleteme.txt', (error) => {
    console.log(error)
  })
  console.log('file deleted')
}else{
  fs.writeFile('./docs/deleteme.txt', '', () => {
    console.log('file was written')
  })
}