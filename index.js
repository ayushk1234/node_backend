const express = require('express')
require('dotenv').config()
const app =express()
// const port =4000



app.get('/',(req,res)=>{
    res.send('hello')
})


app.listen(process.env.PORT,()=>{
    console.log(`examplea pap ${process.env.PORT}`)
})