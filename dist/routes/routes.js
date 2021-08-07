"use strict";
// 7 - importando configurações do multer
// 11 - Implementando multer à rotae função single(Um arquivo por vez) 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var multer_1 = __importDefault(require("multer"));
var multer_2 = __importDefault(require("../config/multer"));
var controller_1 = __importDefault(require("../controller/controller"));
router.post('/upload', multer_1.default(multer_2.default).single('file'), controller_1.default.create);
router.get('/list', controller_1.default.find);
router.get('/filter', controller_1.default.filter);
exports.default = router;
