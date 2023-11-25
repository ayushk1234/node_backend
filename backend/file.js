const fs = require('fs')

// fs.writeFileSync('./test.txt',"hi")

// fs.writeFile('./test.txt',"hiiiiiiiii",(err)=>{
//     console.log(err)
// })

// const result =fs.readFileSync('./test.txt','utf-8')
// console.log(result)

// fs.readFile('./test.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log(result)
//     }
    
// })
function log(data){
    fs.appendFile('./test.txt',`${data}\n`,(err)=>{
        console.log(err)
    });

}

// console.log(result)
// fs.copyFileSync('./test.txt','./copy.txt')

module.exports={log}