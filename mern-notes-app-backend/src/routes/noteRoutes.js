import express from "express";
import { addNote } from "../controllers/noteController.js";
import authenticateToken from "../middleware/authenticateToken.js";

const router = express.Router();

router.post("/add-note", authenticateToken, addNote);

export default router;
