const categoryRepository = require('./category.repository');

exports.geCategories = async () => {
    try {
       const categories= await categoryRepository.geCategories();
       return categories;
    } catch (e) {
        throw new Error(e.message);
    }
}
exports.createCategory = async (payload) => {
    try {
       const category= await categoryRepository.createCategory(payload);
       return category;
    } catch (e) {
        throw new Error(e.message);
    }
}