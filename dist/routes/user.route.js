"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userController = new user_controller_1.default();
const userRouter = (0, express_1.Router)();
// userRouter.post(
//    '/signup',
//    (req: Request, res: Response, next:NextFunction) => userController.create(req, res, next),
// );
// userRouter.post(
//    '/signin',
//    (req: Request, res: Response, next:NextFunction) => userController.login(req, res, next),
// );
userRouter.get('/user', (req, res) => userController.getUsers(req, res));
exports.default = userRouter;
//# sourceMappingURL=user.route.js.map