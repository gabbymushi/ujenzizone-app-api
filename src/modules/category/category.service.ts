import * as categoryRepository from './category.repository';
import { IPayload } from './category.model';

export const getCategories = async () => {
    try {
        const categories = await categoryRepository.geCategories();
        return categories;
    } catch (e) {
        throw new Error(e.message);
    }
}
export const createCategory = async (payload: IPayload) => {
    try {
        const category = await categoryRepository.createCategory(payload);
        return category;
    } catch (e) {
        throw new Error(e.message);
    }
}