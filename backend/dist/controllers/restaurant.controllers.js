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
exports.getGradesRestaurant = exports.addNoteRestaurant = exports.deleteRestaurant = exports.editRestaurant = exports.addRestaurant = exports.getRestaurantByID = exports.listRestaurants = void 0;
const Restaurant_1 = __importDefault(require("../models/Restaurant"));
const listRestaurants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cuisine, name, borough } = req.query;
        let query = {};
        if (cuisine) {
            query.cuisine = cuisine;
        }
        if (borough) {
            query.borough = borough;
        }
        if (name) {
            query.name = name;
        }
        const restaurants = yield Restaurant_1.default.find(query);
        return res.json(restaurants);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al obtener los restaurantes" });
    }
});
exports.listRestaurants = listRestaurants;
//Este metodo se usa para obtener un restaurante por medio de su ID
const getRestaurantByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurants = yield Restaurant_1.default.findById(req.params.id);
        return res.json(restaurants);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al obtener los restaurantes" });
    }
});
exports.getRestaurantByID = getRestaurantByID;
//Este metodo se usa para agregar un restaurant
const addRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const restaurant = yield Restaurant_1.default.findOne({ name: req.body.id });
    console.log(restaurant);
    {
        restaurant ? res.status(400).json({ msg: "El restaurante ya existe" }) : true;
    }
    const newRestaurant = new Restaurant_1.default(req.body);
    yield newRestaurant.save();
    return res.status(201).json(newRestaurant);
});
exports.addRestaurant = addRestaurant;
//Este metodo se usa para editar un restaurant por ID
const editRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, address, borough, cuisine, grades } = req.body;
    if (!name ||
        !address ||
        !borough ||
        !cuisine ||
        !grades) {
        return res.status(400).json({ msg: "Faltan agregar datos" });
    }
    try {
        var existingRestaurant = yield Restaurant_1.default.findOne({ id: req.params.id });
        if (!existingRestaurant) {
            return res.status(404).json({ msg: `Restaurante con ID ${req.params.id} no encontrado` });
        }
        existingRestaurant = new Restaurant_1.default(req.body);
        yield existingRestaurant.save();
        return res.json(existingRestaurant);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al actualizar el restaurante" });
    }
});
exports.editRestaurant = editRestaurant;
//Este metodo se usa para borrar un restaurant por su ID
const deleteRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedRestaurant = yield Restaurant_1.default.findByIdAndDelete(req.params.id);
        if (!deletedRestaurant) {
            return res.status(404).json({ msg: "Restaurante no encontrado" });
        }
        return res.json(deletedRestaurant);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al eliminar el restaurante" });
    }
});
exports.deleteRestaurant = deleteRestaurant;
//Este metodo se usa para agregar una calificacion a un restaurant
const addNoteRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comment, score, date } = req.body;
    if (!comment || !score || !date) {
        return res.status(400).json({ msg: "Faltan agregar datos del comentario" });
    }
    try {
        const restaurant = yield Restaurant_1.default.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ msg: "Restaurante no encontrado" });
        }
        restaurant.grades.push({
            date: new Date(date),
            comment,
            score,
        });
        yield restaurant.save();
        return res.status(201).json(restaurant);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al agregar el comentario" });
    }
});
exports.addNoteRestaurant = addNoteRestaurant;
//Este metodo se usa para obtener las notas de restaurantes 
const getGradesRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurant = yield Restaurant_1.default.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ msg: "Restaurante no encontrado" });
        }
        const grades = restaurant.grades;
        return res.status(200).json(grades);
    }
    catch (error) {
        return res.status(500).json({ msg: "Error al obtener los grades del restaurante" });
    }
});
exports.getGradesRestaurant = getGradesRestaurant;
