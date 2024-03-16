import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";


/*** bu yerda "router" instance dan foydalanib GET methodni chaqirib olamiz va u 2ta argument qabul qiladi ("API link", kirib kelayotgan request) ***/
/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
// API method (.get)=> "N point" login, u controllerga yuboryapti, hamda "getLogin"methodini iwga tuwiryapti
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),  // "single" => bu yerda aqat 1 tagacha rasm joylaw imkonini beryapti
    restaurantController.processSignup
  );

routerAdmin.get("/logout", restaurantController.logout);

/** TEST uchun */
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product */
routerAdmin.get(
  "/product/all", 
  restaurantController.verifyRestaurant, 
  productController.getAllProducts
);
routerAdmin.post(
  "/product/create",
  restaurantController.verifyRestaurant,    // reg.bolgan usergina image upload qila oladi
  makeUploader("products").array("productImages", 5),  // "array" => bu yerda 5 tagacha rasm joylaw imkonini beryapti
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id", 
  restaurantController.verifyRestaurant, 
  productController.updateChosenProduct
);

/** User (Admin User memberlar ustidan kontrol qila oladigan...) */
routerAdmin.get("/user/all", restaurantController.verifyRestaurant, restaurantController.getUsers)




// "ES2020" orqali 
export default routerAdmin;