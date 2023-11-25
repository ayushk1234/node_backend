import mongoose from 'mongoose';

const subTodo = new mongoose.Schema(
    {
         content:{
            type:String,
            required:true
         },
         complete:{
            type: Boolean,
            default:false
         },
         creastedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
         }
    },{timestamps:true})

export const SubTodo =  mongoose.model("Subtodo",subTodo) 

