const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)

// This is for getting the base name --> It'll return "test.txt"
const base = path.basename(filePath)
console.log(base)

// This will resolve an absoulte path --> here we use dirname
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)

// It'll return as an absolute path:
// D:\CURSOS\WEB DEVELOPMENT\CURSOS\NODE JS\content\subfolder\test.txt