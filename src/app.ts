import express from "express";
import path from "path";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
import router from "./router";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
/** below codes coming from Documentation_connect-mongodb-session **/
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions", // it creates new collection in our mongoDB with name "sessions" 
});

/* 1-ENTRANCE */
const app = express(); // It creates an instance of the Express and equal const app
// console.log("__dirname:", __dirname); // __dirname: C:\Users\pc\Desktop\MIT-9\burak\src
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // This line configures Express to parse incoming requests with URL-encoded payloads
app.use(express.json()); // This is commonly used for processing data from AJAX requests or APIs.
app.use(morgan(MORGAN_FORMAT)); // Morgan is a logging middleware incoming requests, such as the HTTP method, URL, status code, response time, etc.

/* 2-SESSIONS */
// Sessionlarni Web Server bn integratsiya jarayoni...Documentation
app.use(
    session({
        secret: String(process.env.SESSION_SECRET), // NOTE: secret code creates by ourself, except "#" symbol
        cookie: {
            maxAge: 1000 * 30, // cookies` lifetime (f.e: 6h) here
        },
        store: store, // yuqorida 13-satrda korsatilgan
        resave: true, // 10:30 da auth => 13:30 gacha session saqlanadi, "true" holatida 12:00 => 15:00 gacha valid hisob, "false" => 12:00 => 13:30 da bekiladi  
        saveUninitialized: true,
    })
);



/* 3-VIEWS */
app.set("views", path.join(__dirname, "views")); // create folder "views" in src
app.set("view engine", "ejs"); // npm i ejs@3.1.6

/* 4-ROUTERS */
/*** Middleware Design pattern ***/
app.use("/admin", routerAdmin);  // BSSR(EJS) => Burak akamiz un maxsus route
app.use("/", router);  // SPA(REACT) => haridorlar un qilingan route


// "ES2020" orqali
export default app;


// // commonjs orqali
// module.exports = app;