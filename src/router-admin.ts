import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";


/*** bu yerda "router" instance dan foydalanib GET methodni chaqirib olamiz va u 2ta argument qabul qiladi ("API link", kirib kelayotgan request) ***/
/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
// API method (.get)=> "N point" login, u controllerga yuboryapti, hamda "getLogin"methodini iwga tuwiryapti
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

/** TEST uchun */
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product */

/** User */




// "ES2020" orqali 
export default routerAdmin;