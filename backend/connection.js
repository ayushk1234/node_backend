const mongoose = require('mongoose')

async function connectMongoDb() {


    const uri = "mongodb+srv://admin:DqKb7NOaLWOM4JLW@cluster0.4jwsbh7.mongodb.net/myDb?retryWrites=true&w=majority"

    return mongoose.connect(uri)
        .then(() => console.log("connetced"))
        .catch((err) => console.log(err))

}

module.exports={connectMongoDb}