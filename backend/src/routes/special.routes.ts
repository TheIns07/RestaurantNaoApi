import { Router } from "express";
import {listarRestaurantes, agregarRestaurante, editarRestaurante, eliminarRestaurante, agregarNotaRestaurante, obtenerGradesRestaurante} from '../controllers/restaurant.controllers'
const router = Router();

router.get("/listarRestaurantes", listarRestaurantes)

router.post("/agregarrestaurante", agregarRestaurante);

router.put("/editarRestaurante/:id", editarRestaurante);

router.delete("/eliminarRestaurante/:id", eliminarRestaurante);

router.post("/agregarNotaRestaurante/:id", agregarNotaRestaurante);

router.get('/obtenergradesrestaurante/grades/:id/', obtenerGradesRestaurante);

export default router;