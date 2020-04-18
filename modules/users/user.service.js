const userRepository = require('./user.repository');

exports.getUsers = async () => {
    try {
        const users = await userRepository.getUsers({});
        return users;
    } catch (e) {
        throw new Error(e.message);
    }
}
exports.createUser = async (body) => {
    try {
        const user = await userRepository.createUser(body);
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}