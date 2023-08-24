import { Router } from "express";
import { listRestaurants, addRestaurant, editRestaurant, deleteRestaurant, addNoteRestaurant, getGradesRestaurant, getRestaurantByID} from '../controllers/restaurant.controllers'
const router = Router();


router.get("/restaurants", listRestaurants)

router.post("/addRestaurant", addRestaurant);

router.put("/restaurants/:id", editRestaurant);

router.delete("/deleterestaurant/:id", deleteRestaurant);

router.put("/restaurants/notes/:id", addNoteRestaurant);

router.get('/restaurants/grades/:id/', getGradesRestaurant);

router.get('/restaurants/:id/', getRestaurantByID);


export default router;