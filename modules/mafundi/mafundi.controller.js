const Mafundi = require('./mafundi.model');

exports.getMafundi = async (req,res) => {
    try {
       const fundi= await Mafundi.find({});
       res.status(200).json(fundi);
    } catch (e) {
        res.status(500).json(e.message);
    }
}
exports.create = async (req,res) => {
    try {
       const fundi= await Mafundi.create(req.body);
       res.status(200).json(fundi);
    } catch (e) {
        res.status(500).json(e.message);
    }
}