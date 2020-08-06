"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const modules_1 = __importDefault(require("./modules"));
const middleware_1 = __importDefault(require("./config/middleware"));
const app = express_1.default();
database_1.default();
middleware_1.default(app);
modules_1.default(app);
const port = process.env.PORT || 4500;
app.listen(port, () => {
    console.log(`Ujenzi zone app is running on port ${port}`);
});
