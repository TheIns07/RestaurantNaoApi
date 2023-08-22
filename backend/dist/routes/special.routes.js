"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurant_controllers_1 = require("../controllers/restaurant.controllers");
const router = (0, express_1.Router)();
router.get("/listRestaurants", restaurant_controllers_1.listRestaurants);
router.post("/addRestaurant", restaurant_controllers_1.addRestaurant);
router.put("/editRestaurant/:id", restaurant_controllers_1.editRestaurant);
router.delete("/deleteRestaurant/:id", restaurant_controllers_1.deleteRestaurant);
router.put("/addNoteRestaurant/:id", restaurant_controllers_1.addNoteRestaurant);
router.get('/getGradesRestaurant/grades/:id/', restaurant_controllers_1.getGradesRestaurant);
router.get('/getRestaurantByID/:id/', restaurant_controllers_1.getRestaurantByID);
exports.default = router;
