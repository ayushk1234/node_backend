const express = require('express')
const http = require('http')
const math = require('./math')
const file= require('./file')
const users = require('./mock_data.json')
const fs= require('fs')

// const myServer = http.createServer((req,res)=>{
//     console.log("new req rec")
//     res.end("hello from server")
//     file.log(req.url)
// })
require('dotenv').config()
const app =express()
const port =process.env.PORT||4001


app.use(express.urlencoded({extended:false}));

// console.log(math.add(2,3))
// const jokes = [
//     {"id":1,"content":"joke1"}
// ]

// app.get('/api',(req,res)=>{
//     res.send('hello')
// })

// app.get('/users',(req,res)=>{
//     const html=`
//     <ul>
//         ${users.map((user)=>{`<li>${user.first_name}</li>`})}
//     </ul>
//     `
//     // return res.json(users)
// })

app.get('/api/users',(req,res)=>{
    return res.json(users)
})



app.get('/api/users/:id',(req,res)=>{

    const id = Number(req.params.id)
    const user = users.find((user)=>user.id==id)
    return res.json(user)
})

app.post('/api/users',(req,res)=>{

    const body=req.body
    users.push({...body,id:users.length+1})
    fs.writeFile('./mock_data.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id:users.length+1})
    })

    // const body = req.json
    // console.log(body)
    // const id = Number(req.params.id)
    // const user = users.find((user)=>user.id==id)
    
})

// app.get('/api/jokes',(req,res)=>{
//     res.send(jokes)
// })

app.listen(process.env.PORT,()=>{
    console.log(`examplea pap ${process.env.PORT}`)
})