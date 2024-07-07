import express from "express";
import {
  createAccount,
  login,
  getUser,
} from "../controllers/authController.js";
import authenticateToken from "../middleware/authenticateToken.js";

const router = express.Router();

router.post("/create-account", createAccount);
router.post("/login", login);
router.get("/get-user", authenticateToken, getUser);

export default router;
