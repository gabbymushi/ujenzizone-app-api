import { Request, Response } from "express";
import * as categoryService from './category.service';

export const geCategories = async (req: Request, res: Response) => {
    try {
        const categories = await categoryService.getCategories();
        return res.status(200).json(categories);
    } catch (e) {
        return res.status(500).json(e.message);
    }
}
export const createCategory = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const category = await categoryService.createCategory(payload);
        return res.status(200).json(category);
    } catch (e) {
        return res.status(500).json(e.message);
    }
}