import { Request, Response } from "express";
import * as  mafundiService from './mafundi.service';

export const getMafundi = async (req: Request, res: Response) => {
    try {
        const categoryId: any  = typeof req.query.categoryId !== 'undefined' ? req.query.categoryId : null;
        const fundi = await mafundiService.getMafundi(categoryId);
        return res.status(200).json(fundi);
    } catch (e) {
        res.status(500).json(e.message);
    }
}
export const create = async (req: Request, res: Response) => {
    try {
        const fundi = await mafundiService.create(req.body);
        return res.status(200).json(fundi);
    } catch (e) {
        res.status(500).json(e.message);
    }
}