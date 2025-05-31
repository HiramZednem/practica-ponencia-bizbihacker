
import express from 'express';
import userController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/create', userController.create);
userRouter.post('/login', userController.login);
userRouter.post('/getUser', userController.getUserById)

export default userRouter;
