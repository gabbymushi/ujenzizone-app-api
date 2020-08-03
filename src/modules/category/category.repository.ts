import Category, { IPayload } from './category.model';

export const geCategories = async () => {
    try {
        const categories = await Category.find({});
        return categories;
    } catch (e) {
        throw new Error(e.message);
    }
}
export const createCategory = async (payload: IPayload) => {
    try {
        const category = await Category.create(payload);
        return category;
    } catch (e) {
        throw new Error(e.message);
    }
}