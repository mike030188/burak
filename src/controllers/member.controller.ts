import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

const memberService = new MemberService();

// SPA (REACT) for products and users
// Definition qismi
const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
    try {
      console.log("signup");
    // console.log("body:", req.body);
    // res.send("DONE");
    const input: MemberInput = req.body,
        result: Member = await memberService.signup(input);
    // TODO: TOKENS AUTHENTICATION
  
    res.json({ member: result });
    } catch (err) {
      console.log("Error, signup:", err);
    /**tekwirsin, agar kirib kelayotgan 'err' biz hosil qilgan Error classidan bo`lsa */  
      if (err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
    }
  };
  
  memberController.login = async (req: Request, res: Response) => {
      try {
        console.log("login");
        // console.log("body:", req.body);
        const input: LoginInput = req.body,
            result = await memberService.login(input);
    // TODO: TOKENS AUTHENTICATION
  
        res.json({ member: result });
      } catch (err) {
        console.log("Error, login:", err);
        // res.json({});
        if (err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
      }
    };

// "ES2020" orqali
export default memberController;