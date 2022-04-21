// CommonJS, every file is module (by default)
// Modules - encapsulated code (only share minimum)

// We need require to call for the modules
const names = require('./4-names')
const sayHi = require('./5- utils')

const data = require('./6-alternative-naming')
console.log(data)

// NOTE: Remember that when you import a module you actually invoke it
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)