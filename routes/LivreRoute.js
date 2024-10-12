import express from "express";
import Livre from "../models/Livre.js";
import {
  addLivre,
  deleteLivre,
  getLivre,
  getLivres,
  livreDisponible,
  updateLivre,
} from "../controllers/LivreController.js";

const router = express.Router();

router.post("/addLivre", addLivre);

router.get("/getLivres", getLivres);

router.patch("/updateLivre/:id", updateLivre);

router.get("/getLivre/:id", getLivre);

router.delete("/deleteLivre/:id", deleteLivre);

router.get("/livreDisponible", livreDisponible);

export default router;
