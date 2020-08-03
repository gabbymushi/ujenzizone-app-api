"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mafundi_routes_1 = __importDefault(require("./mafundi/mafundi.routes"));
const user_routes_1 = __importDefault(require("./users/user.routes"));
const category_routes_1 = __importDefault(require("./category/category.routes"));
exports.default = (app) => {
    app.use('/api/v1/mafundi/', mafundi_routes_1.default);
    app.use('/api/v1/users/', user_routes_1.default);
    app.use('/api/v1/categories/', category_routes_1.default);
};
