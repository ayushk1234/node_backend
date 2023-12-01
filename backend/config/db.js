// const mongoose = require('mongoose')
import mongoose from "mongoose"

const connectMongoDb = async ()=> {

    const uri = "mongodb+srv://admin:DqKb7NOaLWOM4JLW@cluster0.4jwsbh7.mongodb.net/newdb?retryWrites=true&w=majority"

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        // const conn = await mongoose.connect(uri)
        console.log("connetced")}
    catch(err){
        console.log(err)

    }  
       

}

// module.exports={connectMongoDb}

export default connectMongoDb