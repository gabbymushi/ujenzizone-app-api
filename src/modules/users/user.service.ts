import * as userRepository from './user.repository';
import { IUser } from './user.model'

export const getUsers = async () => {
    try {
        const users = await userRepository.getUsers();
        return users;
    } catch (e) {
        throw new Error(e.message);
    }
}
export const createUser = async (body: IUser) => {
    try {
        const user = await userRepository.createUser(body);
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}