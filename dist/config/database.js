"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var uri = String(process.env.DB_STRING);
var connection = mongoose_1.default.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
exports.connection = connection;
