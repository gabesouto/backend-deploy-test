import { NextFunction, Request, Response } from 'express';
import { HTTPStatus } from './http-status.enum';
import SequelizeUser from '../models/user.model';

export default class UserController {
  constructor(
  private model = SequelizeUser
  ) { }

   public async getUsers(req: Request, res: Response){
       const users = await this.model.findAll()
       res.status(200).json({users: users})
   }

}