"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const private_routes_1 = __importDefault(require("./routes/private.routes"));
const special_routes_1 = __importDefault(require("./routes/special.routes"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3001);
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Inicio de la aplicación');
});
app.use(private_routes_1.default);
app.use(special_routes_1.default);
exports.default = app;
