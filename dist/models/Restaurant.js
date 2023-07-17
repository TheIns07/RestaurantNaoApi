"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Definir el esquema
const restaurantSchema = new mongoose_1.Schema({
    _id: mongoose_1.Types.ObjectId,
    address: {
        building: String,
        coord: [Number],
        street: String,
        zipcode: String,
    },
    borough: String,
    cuisine: String,
    grades: [
        {
            date: Date,
            score: Number,
        },
    ],
    comments: [
        {
            date: Date,
            comment: String,
            _id: mongoose_1.Types.ObjectId,
        },
    ],
    name: String,
    restaurant_id: String,
});
// Crear el modelo
const Restaurant = (0, mongoose_1.model)('Restaurant', restaurantSchema);
// Exportar el modelo
exports.default = Restaurant;
