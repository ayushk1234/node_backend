import userModel from "../models/user/userModel.js";


export const updateUserController = async (req, res, next) => {

    const {
        firstName,
        lastName,
        location,
        email
    } = req.body

    if (!firstName || !lastName || !location || !email) {
        next("please provide all fields")
    }

    const user = await userModel.findOne({
        _id: req.user.userId
    })
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.location = location

    await user.save()
    const token = user.createJWT()
    res.status(200).json({
        user,
        token
    })

}