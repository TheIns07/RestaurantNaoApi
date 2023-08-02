import { Router } from "express";
import {listarRestaurantes, agregarRestaurante, editarRestaurante, eliminarRestaurante, agregarComentarioRestaurante, agregarNotaRestaurante} from '../controllers/restaurant.controllers'
const router = Router();

router.get("/listarRestaurantes", listarRestaurantes)

router.post("/agregarrestaurante", agregarRestaurante)

router.put("/editarRestaurante", editarRestaurante)

router.delete("/eliminarRestaurante", eliminarRestaurante)

router.post("/agregarComentarioRestaurante", agregarComentarioRestaurante)

router.post("/agregarNotaRestaurante", agregarNotaRestaurante)

export default router;