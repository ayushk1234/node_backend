const express = require('express')

const router = express.Router();


router.get('/',async (req,res)=>{

    const result = await User.find({})
    // return res.json(users)
    return res.json(result)
})



router.get('/:id',async (req,res)=>{

    res.setHeader("X-custom","ayush")

    // const id = Number(req.params.id)
    const user = await User.findById(req.params.id)
    // const user = users.find((user)=>user.id==id)
    return res.json(user)
})

router.post('/',async (req,res)=>{

    const body=req.body
    console.log(body)

    result =await User.create({
        firstName:"a",
        lastName:"b",
        email:"1",
        jobTitle:"we",
        gender:"male"
    })

    console.log(result)
    return res.status(201).json({msg:"success"})

    // users.push({...body,id:users.length+1})
    // fs.writeFile('./mock_data.json',JSON.stringify(users),(err,data)=>{
    //     return res.status(201).json({status:"success",id:users.length+1})
    // })
    // DqKb7NOaLWOM4JLW
    // mongodb+srv://admin:<password>@cluster0.4jwsbh7.mongodb.net/?retryWrites=true&w=majority

    // const body = req.json
    // console.log(body)
    // const id = Number(req.params.id)
    // const user = users.find((user)=>user.id==id)
    
})


module.exports=router