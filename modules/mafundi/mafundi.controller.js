const Mafundi = require('./mafundi.service');

exports.getMafundi = async (req,res) => {
    try {
       const fundi= await Mafundi.getMafundi();
       return res.status(200).json(fundi);
    } catch (e) {
        res.status(500).json(e.message);
    }
}
exports.create = async (req,res) => {
    try {
       const fundi= await Mafundi.create(req.body);
       return res.status(200).json(fundi);
    } catch (e) {
        res.status(500).json(e.message);
    }
}