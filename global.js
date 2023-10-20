// ** To see the result, please command `node global` in terminal

// ** There is a global object in node.js
// console.log(global)

// ** There are many functions in global object
// global.setTimeout(() => {
//   console.log("in the timeout")
//   clearInterval(int)
// }, 3000)

// ** When we call the functions, we don't need to include global.
// const int = setInterval(() => {
//   console.log("in the interval")
// }, 1000)

// ** They are useful when we need to call the file path or name
// console.log("__dirname", __dirname) // C:\Users\joyun.hsiao\Desktop\nodejs\node-crash-course
// console.log("__filename", __filename) // C:\Users\joyun.hsiao\Desktop\nodejs\node-crash-course\global.js
// 

// ** This will cause an error, because "document" is in the window object, not in the global object or node.js
// console.log(document.querySelector) // document is not defined