const mafundiRepository = require('./mafundi.repository');
const userRepository = require('../users/user.repository');

exports.getMafundi = async () => {
    try {
        const fundi = await mafundiRepository.getMafundi();
        return fundi;
    } catch (e) {
        throw new Error(e.message);
    }
}
exports.create = async (body) => {
    try {
        const user = await userRepository.createUser(body);
        const fundiDetails = { user: user._id, category: body.category };
        const fundi = await mafundiRepository.create(fundiDetails);
        return user;
    } catch (e) {
        throw new Error(e.message);
    }
}