import User,{IUser} from './user.model';

export const getUsers = async () => {
    try {
       const users= await User.find({});
      return users;
    } catch (e) {
        throw new Error(e.message);
    }
}
export const createUser = async (body:IUser) => {
    try {
       const user= await User.create(body);
      return user;
    } catch (e) {
        throw new Error(e.message);
    }
}