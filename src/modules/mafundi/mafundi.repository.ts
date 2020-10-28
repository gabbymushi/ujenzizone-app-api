import Mafundi, { IMafundi } from './mafundi.model';

export const getMafundi = async (categoryId: string | null) => {
    try {
        const match = categoryId !== null ? { _id: categoryId } : '';
        const fundi = await Mafundi.find({})
            .populate([{
                path: 'profile',
                match: { userType: 'fundi' },
            },
            {
                path: 'category',
                match: match,
            }]
            )
        return fundi;
    } catch (e) {
        throw new Error(e.message);
    }
}

export const create = async (body: IMafundi) => {
    try {
        const fundi = await Mafundi.create(body);
        return fundi;
    } catch (e) {
        throw new Error(e.message);
    }
}