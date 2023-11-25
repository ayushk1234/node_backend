import mongoose from 'mongoose';


const hospitalSchema = new  mongoose.Schema(
    {
        
    },{timestamps:true})

const Hospital = mongoose.model("Hospital",hospitalSchema)