const errorMiddleware = (err, req, res, next) => {

    console.log(err)
    const defaultErrors = {
        statusCode: 500,
        message: err

    }
    // res.status(500).send({
    //     success: false,
    //     message: 'sometrhint g went wrong',
    //     err: err
    // })
    //missing fiels error
    // console.log(err)
    if (err.name === "ValidationError") {
        defaultErrors.statusCode = 400;
        defaultErrors.message = Object.values(err.errors)
            .map((item) => item.message)
            .join(",");
    }
    if (err.code === 11000) {
        defaultErrors.statusCode = 400;
        defaultErrors.message = Object.keys(err.keyValue)

    }
    // if (err.name === "ValidationError") {
    //     defaultErrors.statusCode = 400
    //     defaultErrors.message = Object.values(err.errors).map(item => item.message).join(',')
    //     console.log("-----")
    //     consolelof(defaultErrors)
    // }
    res.status(defaultErrors.statusCode).send({
        message: defaultErrors.message
    })
}

export default errorMiddleware;