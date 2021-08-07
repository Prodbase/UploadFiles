"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var TemplateSchema = new mongoose_1.default.Schema({
    name: String,
    category: [],
    image: String,
    url: String
});
var Template = mongoose_1.default.model("Template", TemplateSchema);
exports.Template = Template;
