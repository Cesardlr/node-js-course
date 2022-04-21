const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err) return
    const first = result;

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err) return
        const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the result of the async code : ${first}, ${second}`, 
            {flag:'a'},
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                } 
                console.log(result)
            }
        )

    })
})