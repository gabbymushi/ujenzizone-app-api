const User = require('./user.model');

exports.getUsers = async () => {
    try {
       const users= await User.find({});
      return users;
    } catch (e) {
        throw new Error(e.message);
    }
}
exports.createUser = async (body) => {
    try {
       const user= await User.create(body);
      return user;
    } catch (e) {
        throw new Error(e.message);
    }
}