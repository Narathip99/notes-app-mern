import express from "express";
import { createAccount, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/create-account", createAccount);
router.post("/login", login);
router.get("/get-user", authenticateToken, getUser);

export default router;
