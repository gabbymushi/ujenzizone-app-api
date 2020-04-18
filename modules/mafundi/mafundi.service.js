const mafundiRepository = require('./mafundi.repository');

exports.getMafundi = async () => {
    try {
       const fundi= await mafundiRepository.getMafundi();
       return fundi;
    } catch (e) {
        throw new Error(e.message);
    }
}
exports.create = async (body) => {
    try {
       const fundi= await mafundiRepository.create(body);
       return fundi;
    } catch (e) {
        throw new Error(e.message);
    }
}