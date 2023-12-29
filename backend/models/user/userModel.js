// const mongoose = require('mongoose')
import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
// import JWt from 'jsonwebtoken'
import JWT from "jsonwebtoken";

//schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'first is required']
    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minimum: [6, 'please enter more than 6'],
        select: true,
    },
    location: {
        type: String,
        default: 'mumbai'
    }
}, {
    timestamps: true
})




userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


// userSchema.pre('save', async function () {

//     if(!this.isModified) return ;
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt);

// })

userSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password)

    return isMatch;
}

userSchema.methods.createJWT = function () {
    return JWT.sign({
        userId: this._id
    }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

// const User = new mongoose.model("User", userSchema)

// module.exports={User}

// export default User

export default mongoose.model("User", userSchema);