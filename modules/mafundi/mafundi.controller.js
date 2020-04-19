const mafundiService = require('./mafundi.service');

exports.getMafundi = async (req,res) => {
    try {
       const fundi= await mafundiService.getMafundi();
       return res.status(200).json(fundi);
    } catch (e) {
        res.status(500).json(e.message);
    }
}
exports.create = async (req,res) => {
    try {
       const fundi= await mafundiService.create(req.body);
       return res.status(200).json(fundi);
    } catch (e) {
        res.status(500).json(e.message);
    }
}