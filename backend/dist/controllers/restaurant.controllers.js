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
exports.agregarNotaRestaurante = exports.agregarComentarioRestaurante = exports.eliminarRestaurante = exports.editarRestaurante = exports.agregarRestaurante = exports.listarRestaurantes = void 0;
const Restaurant_1 = __importDefault(require("../models/Restaurant"));
const listarRestaurantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurantes = yield Restaurant_1.default.find();
        return res.json(restaurantes);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al obtener los restaurantes" });
    }
});
exports.listarRestaurantes = listarRestaurantes;
const agregarRestaurante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, address, borough, cuisine } = req.body;
    if (!name ||
        !address.building ||
        !address.coord ||
        !address.street ||
        !address.zipcode ||
        !borough ||
        !cuisine) {
        return res.status(400).json({ msg: "Faltan agregar datos" });
    }
    const restaurant = yield Restaurant_1.default.findOne({ name: req.body.name });
    console.log(restaurant);
    {
        restaurant ? res.status(400).json({ msg: "El usuario ya existe" }) : true;
    }
    const newRestaurant = new Restaurant_1.default(req.body);
    yield newRestaurant.save();
    return res.status(201).json(newRestaurant);
});
exports.agregarRestaurante = agregarRestaurante;
const editarRestaurante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, address, borough, cuisine } = req.body;
    if (!name ||
        !address.building ||
        !address.coord ||
        !address.street ||
        !address.zipcode ||
        !borough ||
        !cuisine) {
        return res.status(400).json({ msg: "Faltan agregar datos" });
    }
    try {
        const existingRestaurant = yield Restaurant_1.default.findOne({ _id: req.params.id });
        if (!existingRestaurant) {
            return res.status(404).json({ msg: "Restaurante no encontrado" });
        }
        existingRestaurant.name = name;
        existingRestaurant.address = address;
        existingRestaurant.borough = borough;
        existingRestaurant.cuisine = cuisine;
        yield existingRestaurant.save();
        return res.json(existingRestaurant);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al actualizar el restaurante" });
    }
});
exports.editarRestaurante = editarRestaurante;
const eliminarRestaurante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedRestaurant = yield Restaurant_1.default.findByIdAndRemove(req.params.id);
        if (!deletedRestaurant) {
            return res.status(404).json({ msg: "Restaurante no encontrado" });
        }
        return res.json(deletedRestaurant);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al eliminar el restaurante" });
    }
});
exports.eliminarRestaurante = eliminarRestaurante;
const agregarComentarioRestaurante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, comment } = req.body;
    if (!date || !comment) {
        return res.status(400).json({ msg: "Faltan agregar datos del comentario" });
    }
    try {
        const restaurant = yield Restaurant_1.default.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ msg: "Restaurante no encontrado" });
        }
        restaurant.comments.push({ date, comment });
        yield restaurant.save();
        return res.status(201).json(restaurant);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al agregar el comentario" });
    }
});
exports.agregarComentarioRestaurante = agregarComentarioRestaurante;
const agregarNotaRestaurante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, score } = req.body;
    if (!date || !score) {
        return res.status(400).json({ msg: "Faltan agregar datos de la nota" });
    }
    try {
        const restaurant = yield Restaurant_1.default.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ msg: "Restaurante no encontrado" });
        }
        restaurant.grades.push({ date, score });
        yield restaurant.save();
        return res.status(201).json(restaurant);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al agregar la nota" });
    }
});
exports.agregarNotaRestaurante = agregarNotaRestaurante;