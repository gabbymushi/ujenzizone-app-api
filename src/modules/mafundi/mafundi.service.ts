import * as  mafundiRepository from './mafundi.repository';
import * as userRepository from '../users/user.repository';
import { IMafundi } from './mafundi.model'
import { IUser } from '../users/user.model'

export const getMafundi = async (categoryId: string) => {
    try {
        const fundi = await mafundiRepository.getMafundi(categoryId);
        return fundi;
    } catch (e) {
        throw new Error(e.message);
    }
}
export const create = async (body: any) => {
    try {
        const user = await userRepository.createUser(body);
        const fundiDetails  = { fundi: user._id, category: body.category };
        //const fundi = await mafundiRepository.create(fundiDetails);
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}