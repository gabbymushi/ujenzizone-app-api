"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const MafundiSchema = new mongoose_1.Schema({
    fundi: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID  is required!'],
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category  is required!'],
    }
});
exports.default = mongoose_1.model('Mafundi', MafundiSchema);
