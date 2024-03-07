// burak lohiyamizda packagelarni "ES2020" orqali chaqiramiz:

import dotenv from "dotenv"; // const dotenv = require ( 'dotenv'); (*commonjs sample FYI:)
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

// *** connection to DB via Mongoose ***
mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB connection succeed");
        const PORT = process.env.PORT ?? 3003; // agar PORTni topolmasa 3003ga ulan
        app.listen(PORT, function () {
            console.info(`The server is running successfully on port: ${PORT}`);
            console.info(`Admin project on http://localhost:${PORT}/admin \n`);
        })
    })
    .catch((err) => console.log("ERROR on connection MongoDB", err));





























// //** PORT ni tekwiriw */
// console.log("PORT:", process.env.PORT);

// //** DataBase ni tekwiriw */
// console.log("MONGO_URL:", process.env.MONGO_URL);

























// *** Types of pattern ***
// Architectoral pattern: MVC, Dependency Injection (DI), MVP 

// Design pattern: Middleware, Decorator


// console.log("EXECUTED!");

// import moment from "moment";

// const currentTime = moment().format("YYYY MM DD");
// console.log(currentTime);

// const person: string = "Mike";
// const count: number = 88;

