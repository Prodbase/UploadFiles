"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes/routes"));
var database_1 = require("./config/database");
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.middleware();
    }
    App.prototype.middleware = function () {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
        this.express.use(routes_1.default);
        database_1.connection
            .then(function () { return console.log("Connected to database"); })
            .catch(function (error) { return console.log("Erro to connect database " + error); });
    };
    return App;
}());
exports.default = new App();
