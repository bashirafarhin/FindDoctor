import express from "express";
import { getDoctors } from "../controllers/doctorController";

const router = express.Router();

router.get("/search", getDoctors);

export default router;
