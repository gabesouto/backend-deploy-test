import { Router, Request, Response, NextFunction } from 'express';
// import UserController from '../controllers/user.controller';

// const userController = new UserController();

const userRouter = Router();

// userRouter.post(
//    '/signup',
//    (req: Request, res: Response, next:NextFunction) => userController.create(req, res, next),
// );

// userRouter.post(
//    '/signin',
//    (req: Request, res: Response, next:NextFunction) => userController.login(req, res, next),
// );

userRouter.get('/user', (req, res) => res.json({ ok: "user up" }));

export default userRouter;
