const {readFileSync, writeFileSync} = require('fs')

// readFileSync works to read the file that you want, first you pass the file direction and then a decoder in this case "utf-8"
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// writeFileSync is for writting a new file, it has 2 parameters, the path of where you want the file and what do you want the file to contain, then we have an object with the propertie flag inside of it that has the value of 'a', this flag:'a' propertie helps us to append another result to the actual file, so everytime we run this script the file will only be actualized not rewritten, we'll only add what we tell to the script to the existing file, leaving what we already had inside of it

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`, 
    {flag:'a'}
)