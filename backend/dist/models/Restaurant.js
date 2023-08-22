"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const restaurantSchema = new mongoose_1.Schema({
    name: String,
    address: {
        building: String,
        coord: [Number, Number],
        street: String,
        zipcode: String,
    },
    borough: String,
    cuisine: String,
    grades: [
        {
            date: Date,
            score: Number,
            comment: String,
        },
    ]
});
restaurantSchema.index({ name: 'text', borough: 'text', cuisine: 'text' });
const Restaurant = (0, mongoose_1.model)('Restaurant', restaurantSchema);
exports.default = Restaurant;
