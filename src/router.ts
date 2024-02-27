import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";


/*** bu yerda "router" instance dan foydalanib GET methodni chaqirib olamiz va u 2ta argument qabul qiladi ("API link", kirib kelayotgan request) ***/
router.get("/", memberController.goHome);

/*** Login Page ***/
router.get("/login", memberController.getLogin);

/*** SignUp Page ***/
router.get("/signup", memberController.getSignup);


// "ES2020" orqali 
export default router;