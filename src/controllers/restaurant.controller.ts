import { Request, Response } from "express";
import { T } from "../libs/types/common";

// EJS for Burak akamiz un

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res:Response) => {
    try {
        res.send('Home Page');
    } catch (err) {
        console.log("Error, goHome:", err);
    }
};

restaurantController.getLogin = (req: Request, res:Response) => {
    try {
        res.send('Login Page');
    } catch (err) {
        console.log("Error, getLogin:", err);
    }
};

restaurantController.getSignup = (req: Request, res:Response) => {
    try {
        res.send('Signup Page');
    } catch (err) {
        console.log("Error, getSignup:", err);
    }
};

// "ES2020" orqali
export default restaurantController;