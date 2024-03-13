"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import UserController from '../controllers/user.controller';
// const userController = new UserController();
const userRouter = (0, express_1.Router)();
// userRouter.post(
//    '/signup',
//    (req: Request, res: Response, next:NextFunction) => userController.create(req, res, next),
// );
// userRouter.post(
//    '/signin',
//    (req: Request, res: Response, next:NextFunction) => userController.login(req, res, next),
// );
userRouter.get('/user', (req, res) => res.json({ ok: "user up" }));
exports.default = userRouter;
//# sourceMappingURL=user.route.js.map