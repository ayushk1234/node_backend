export const createJobController = async (req, res, next) => {

    const {company,position,} = req.body

    if( !company || !position){
        next("pleae provide a company or postion ")
    }

    req.body.createdBy = req.user.userId
    const job= await jobsModel



}