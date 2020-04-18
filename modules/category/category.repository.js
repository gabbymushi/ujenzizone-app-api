const Category = require('./category.model');

exports.geCategories = async () => {
    try {
       const categories= await Category.find({});
       return categories;
    } catch (e) {
        throw new Error(e.message);
    }
}
exports.createCategory = async (payload) => {
    try {
       const category= await Category.create(payload);
       return category;
    } catch (e) {
        throw new Error(e.message);
    }
}