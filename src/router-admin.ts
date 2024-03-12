import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";


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

routerAdmin.get("/logout", restaurantController.logout);

/** TEST uchun */
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product */
routerAdmin.get("/product/all", restaurantController.verifyRestaurant, productController.getAllProducts);
routerAdmin.post("/product/create", restaurantController.verifyRestaurant, productController.createNewProduct);
routerAdmin.post("/product/:id", restaurantController.verifyRestaurant, productController.updateChosenProduct);

/** User */




// "ES2020" orqali 
export default routerAdmin;