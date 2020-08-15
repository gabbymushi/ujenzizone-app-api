import { Request, Response } from "express";
import * as userService from './user.service';

export const getUsers = async (req:Request, res:Response) => {
    try {
        const users = await userService.getUsers();
        return res.status(200).json(users);
    } catch (e) {
        res.status(500).json(e.message);
    }
}
export const createUser = async (req:Request, res:Response) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(200).json(user);
    } catch (e) {
        console.log(e.message);
        res.status(500).json(e.message);
    }
}