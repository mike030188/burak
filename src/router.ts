import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

// Call qismi
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);

// "ES2020" orqali 
export default router;