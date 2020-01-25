const Mafundi = require('./mafundi.model');

exports.getMafundi = async (req,res) => {
    try {
        //console.log('Body',req.body);
       const fundi= await Mafundi.find({});
       res.status(200).json(fundi);
    } catch (e) {
        //console.log(e.message);
        res.status(500).json(e.message);
    }
}
exports.create = async (req,res) => {
    try {
       // console.log('Body',req.body);
       const fundi= await Mafundi.create(req.body);
       res.status(200).json(fundi);
    } catch (e) {
        //console.log(e.message);
        res.status(500).json(e.message);
    }
}