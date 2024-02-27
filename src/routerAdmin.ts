import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";


/*** bu yerda "router" instance dan foydalanib GET methodni chaqirib olamiz va u 2ta argument qabul qiladi ("API link", kirib kelayotgan request) ***/
routerAdmin.get("/", restaurantController.goHome);

/*** Login Page ***/
routerAdmin.get("/login", restaurantController.getLogin);

/*** SignUp Page ***/
routerAdmin.get("/signup", restaurantController.getSignup);


// "ES2020" orqali 
export default routerAdmin;