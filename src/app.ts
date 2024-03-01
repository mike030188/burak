import express from "express";
import path from "path";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
import router from "./router";

/* 1-ENTRANCE */
const app = express();
// console.log("__dirname:", __dirname); // __dirname: C:\Users\pc\Desktop\MIT-9\burak\src
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/* 2-SESSIONS */


/* 3-VIEWS */
app.set("views", path.join(__dirname, "views")); // create folder "views" in src
app.set("view engine", "ejs"); // npm i ejs@3.1.6

/* 4-ROUTERS */
/*** Middleware Design pattern ***/
app.use("/admin", routerAdmin);  // EJS => Burak akamiz un maxsus route
app.use("/", router);  // REACT => haridorlar un qilingan route


// "ES2020" orqali
export default app;


// // commonjs orqali
// module.exports = app;