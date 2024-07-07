import express from "express";
import {
  addNote,
  editNote,
  updateNotePinned,
  getAllNotes,
  deleteNote,
  searchNotes,
} from "../controllers/noteController.js";
import authenticateToken from "../middleware/authenticateToken.js";

const router = express.Router();
router.put("/edit-note/:noteId", authenticateToken, editNote);
router.put("/update-note-pinned/:noteId", authenticateToken, updateNotePinned);
router.get("/get-all-notes", authenticateToken, getAllNotes);
router.delete("/delete-note/:noteId", authenticateToken, deleteNote);
router.get("/search-notes", authenticateToken, searchNotes);

router.post("/add-note", authenticateToken, addNote);

export default router;
