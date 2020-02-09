const Category = require('./category.model');

exports.geCategories = async (req,res) => {
    try {
       const categories= await Category.find({});
       res.status(200).json(categories);
    } catch (e) {
        res.status(500).json(e.message);
    }
}
