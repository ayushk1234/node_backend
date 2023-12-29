import express from 'express'
// import testPostController from '../controllers/testController.js'
import userAuth from '../middlewares/authMiddleware.js'
import {
    updateUserController
} from '../controllers/userController.js'
const router = express.Router()

router.put('/update-user', userAuth, updateUserController)

// router.post('/test',testPostController)
export default router