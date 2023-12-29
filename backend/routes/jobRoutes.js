import express from 'express'
// import userAuth from '../middlewares/authMiddleware.js'

import userAuth from '../middlewares/authMiddleware.js'

import {
    createJobController
} from '../controllers/jobController.js'


const router = express.Router()


router.post("/create-job",userAuth,)
export default router