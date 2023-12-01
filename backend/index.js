// const express = require('express')
import express from "express"
import "express-async-errors";
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'


import connectMongoDb from './config/db.js'

import testRoutes from "./routes/testRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import errorMiddleware from "./middlewares/errorMiddleware.js";


dotenv.config()

connectMongoDb()

// const http = require('http')
// const math = require('./math')
// // const mongoose = require('mongoose')

// // const conection = require('./connection')
// const file= require('./file')
// const users = require('./mock_data.json')
// const fs= require('fs')
// const User = require('./models/dummy/user')
// const userRouter = require('./routes/user')

// const myServer = http.createServer((req,res)=>{
//     console.log("new req rec")
//     res.end("hello from server")
//     file.log(req.url)
// })


const app = express()

app.use(express.json({
    extended: false
}));
app.use(cors())
app.use(morgan('dev'))


app.use("/api/v1/test", testRoutes)
app.use("/api/v1/auth", authRoutes)

//validation middleware
app.use(errorMiddleware)


const PORT = process.env.PORT || 4001

// const uri = "mongodb+srv://admin:DqKb7NOaLWOM4JLW@cluster0.4jwsbh7.mongodb.net/myDb?retryWrites=true&w=majority"

// mongoose.connect(uri)
// .then(()=>console.log("connetced"))
// .catch((err)=>console.log(err))

// console.log(conection)

// const userSchema = new mongoose.Schema({
//     firstName:{
//         type:String,
//         required:true
//     },
//     lastName:{
//         type:String,

//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     jobTitle:{
//         type:String,

//     },
//     gender:{
//         type:String
//     }
// },{timestamps:true})

// const User = new mongoose.model("user",userSchema)

// app.use(express.urlencoded({extended:false}));


// app.use("/users",userRouter)s
// application/json/

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



// app.get('/api/jokes',(req,res)=>{
//     res.send(jokes)
// })

app.listen(PORT, () => {
    console.log(`examplea app ${process.env.DEV_MODE} ${PORT}`)
})