import userModel from "../models/user/userModel.js";

export const registerController = async (req, res, next) => {

    // try {
    const {
        firstName,
        email,
        password
    } = req.body
    if (!firstName) {
        next('please enter a firstName')
        // "firstName":"ayush",
        // "email":"ak@gamail.com",
        // "password":"password"
        // return res.status(400).send({
        //     succes: false,
        //     message: 'please enter a name'
        // })
    }
    if (!email) {
        next('please enter a email')
        // return res.status(400).send({
        //     succes: false,
        //     message: 'please enter a email'
        // })
    }
    if (!password) {
        next('please enter a password')
        // return res.status(400).send({
        //     succes: false,
        //     message: 'please enter a password'
        // })
    }
    const existingUser = await userModel.findOne({
        email
    })
    if (existingUser) {
        next('please enter a existing user')
        // return res.status(200).send({
        //     success: false,
        //     message: 'email alreadt exists '
        // })
    }
    const user = await userModel.create({
        firstName,
        email,
        password
    })

    const token = user.createJWT()

    res.status(201).send({
        success: true,
        message: 'user created successfully',
        user: {
            name: user.firstName,
            email: user.email,
            location: user.location,
            lastname: user.lastname
        },
        token
    })

    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTY5YzA2OWQzOWQ5MTQ4MjM5NmJkMDYiLCJpYXQiOjE3MDE0MjkzNTMsImV4cCI6MTcwMTUxNTc1M30._ZVnAx48lBSl_8xTspIIbPaA6_eoqXzr3hrUBOPtrVY

    // } catch (error) {

    //     console.log(error)
    //     // res.status(400).send({
    //     //     message: "error in register user",
    //     //     success: false,
    //     //     error
    //     // })
    //     next(error)

    // }

}


export const loginController = async (req, res) => {

    const {
        email,
        password
    } = req.body

    if (!email || !password) {
        next('please provide all fields')
    }

    const user = await userModel.findOne({
        email
    }).select('+password')

    if (!user) {
        next('invalid username or password')

    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
        next('invalid username or password')
    }


    user.password = undefined
    const token = user.createJWT()
    res.status(200).json({
        success: true,
        message: 'login successfully',
        user,
        token,

    })
}