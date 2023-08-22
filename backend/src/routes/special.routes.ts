import { Router } from "express";
import { listRestaurants, addRestaurant, editRestaurant, deleteRestaurant, addNoteRestaurant, getGradesRestaurant, getRestaurantByID} from '../controllers/restaurant.controllers'
const router = Router();

router.get("/listRestaurants", listRestaurants)

router.post("/addRestaurant", addRestaurant);

router.put("/editRestaurant/:id", editRestaurant);

router.delete("/deleteRestaurant/:id", deleteRestaurant);

router.put("/addNoteRestaurant/:id", addNoteRestaurant);

router.get('/getGradesRestaurant/grades/:id/', getGradesRestaurant);

router.get('/getRestaurantByID/:id/', getRestaurantByID);



export default router;