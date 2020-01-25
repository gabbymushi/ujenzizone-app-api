const Mafundi = require('./mafundi.model');

exports.create = async (req,res) => {
    try {
       const fundi= await Mafundi.create(req.body);
       res.status(200).json(fundi);
    } catch (e) {
        console.log(e.message);
    }
}