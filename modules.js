// ** import another javascript file
// const xyz = require('./people')

// console.log("xyz", xyz)
// console.log("xyz.people", xyz.people)
// console.log("xyz.ages", xyz.ages)

// ** another way to import 
const { people, ages } = require('./people')
// console.log("people", people)
// console.log("ages", ages)

// ** this is an operating system information object in node itself
const os = require('os')
console.log("os", os)
console.log("os.platform()", os.platform()) // win32 
console.log("os.homedir()", os.homedir()) // C:\Users\joyun.hsiao