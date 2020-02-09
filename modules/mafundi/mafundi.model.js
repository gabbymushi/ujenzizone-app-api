const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MafundiSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: [true, 'User ID  is required!'],
    },
    category: {
        type: Schema.Types.ObjectId,
        required: [true, 'Category  is required!'],
    }
});
exports=module.exports=mongoose.model('Mafundi',MafundiSchema);