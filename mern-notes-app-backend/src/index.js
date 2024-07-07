// src/index.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🌏 ❤️`);
});

app.get("/", (req, res) => {
  res.json({ data: "respond received from the server!" });
});

// Use Routes
app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);
