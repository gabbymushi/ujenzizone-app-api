"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getMafundi = void 0;
const mafundi_model_1 = __importDefault(require("./mafundi.model"));
exports.getMafundi = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const match = categoryId !== null ? { _id: categoryId } : '';
        const fundi = yield mafundi_model_1.default.find({})
            .populate([{
                path: 'profile',
                match: { userType: 'fundi' },
            },
            {
                path: 'category',
                match: match,
            }]);
        return fundi;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.create = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fundi = yield mafundi_model_1.default.create(body);
        return fundi;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
