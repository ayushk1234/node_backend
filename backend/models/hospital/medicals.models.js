import mongoose from 'mongoose';


const medicalSchema = new  mongoose.Schema(
    {
        
    },{timestamps:true})

const Medical = mongoose.model("Medical",medicalSchema)