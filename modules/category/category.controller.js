const Category = require('./category.model');

exports.geCategories = async (req,res) => {
    try {
       const categories= await Category.find({});
       res.status(200).json(categories);
    } catch (e) {
        res.status(500).json(e.message);
    }
}
exports.createCategory = async (req,res) => {
    try {
       const category= await Category.create(req.body);
       res.status(200).json(category);
    } catch (e) {
        res.status(500).json(e.message);
    }
}