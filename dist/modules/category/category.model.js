"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
    }
});
exports.default = mongoose_1.model('Category', CategorySchema);
