const categoryService = require('./category.service');

exports.geCategories = async (req, res) => {
    try {
        const categories = await categoryService.geCategories();
        return res.status(200).json(categories);
    } catch (e) {
        return res.status(500).json(e.message);
    }
}
exports.createCategory = async (req, res) => {
    try {
        const payload = req.body;
        const category = await categoryService.createCategory(payload);
        return res.status(200).json(category);
    } catch (e) {
        return res.status(500).json(e.message);
    }
}