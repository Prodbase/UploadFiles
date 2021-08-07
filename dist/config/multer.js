"use strict";
// 9 / 13  - Destino dos uploads
// 14 / 18 - Criando hash aleatório para cada arquivo upado
// 23 - Declarando tamanho dos arquivos que podem ser upados
// 25 / 33 - Tipos dos arquivos suportados
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var crypto_1 = __importDefault(require("crypto"));
exports.default = {
    dest: path_1.default.resolve(__dirname, '..', '..', 'files'),
    storage: multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path_1.default.resolve(__dirname, '..', '..', 'files'));
        },
        filename: function (req, file, cb) {
            crypto_1.default.randomBytes(16, function (err, hash) {
                if (err)
                    cb(err, file.filename);
                var filename = hash.toString('hex') + "-" + file.originalname;
                cb(null, filename);
            });
        }
    }),
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: function (req, file, cb) {
        var allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];
        allowedMimes.includes(file.mimetype) ? cb(null, true) : cb(new Error('Invalid file type'));
    }
};
