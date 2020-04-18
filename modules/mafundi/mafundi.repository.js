const Mafundi = require('./mafundi.model');

exports.getMafundi = async () => {
    try {
       const fundi= await Mafundi.find({});
       return fundi;
    } catch (e) {
        throw new Error(e.message);
    }
}
exports.create = async (body) => {
    try {
       const fundi= await Mafundi.create(body);
       return fundi;
    } catch (e) {
        throw new Error(e.message);
    }
}