import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput, AdminRequest} from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";

const memberService = new MemberService();


// SSR (EJS) for Burak akamiz un

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res:Response) => {
    try {
        console.log("goHome");
        // res.send('Home Page');
        // send | json | redirect | end | render => methodlari bor
        res.render("home");
    } catch (err) {
        console.log("Error, goHome:", err);
        res.redirect("/admin");
    }
};

restaurantController.getSignup = (req: Request, res:Response) => {
  try {
      console.log("getSignup");
      // res.send('Signup Page');
      res.render("signup");

  } catch (err) {
      console.log("Error, getSignup:", err);
      res.redirect("/admin");
  }
};

restaurantController.getLogin = (req: Request, res:Response) => {
    try {
        console.log("getLogin");
        // res.send('Login Page');
        res.render("login");

    } catch (err) {
        console.log("Error, getLogin:", err);
        res.redirect("/admin");
    }
};


restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processSignup");
  // console.log("body:", req.body);
  // res.send("DONE");
    const file = req.file;
    // console.log("file:", file);
    // throw new Error("Forced Quit"); // 71 satr "err"ga yonaltiradi
    /* signUp user Image yuklawini majburlash */
    if(!file) throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

  const newMember: MemberInput = req.body;
  newMember.memberImage = file?.path;
  newMember.memberType = MemberType.RESTAURANT;
  const result = await memberService.processSignup(newMember);
  // TODO: SESSIONS AUTHENTICATION

  req.session.member = result;
  req.session.save(function () {  // session success save bolgandan keyin bizning browser cookiesga "sid"ni joylaydi va...
    // res.send(result); // session collectionga "member-data (result)"ni borib joylaydi
    res.redirect("/admin/product/all");
  })

  // res.send(result); yuqoridagi session ichiga yubordik
  } catch (err) {
    console.log("Error, processSignup:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('admin/signup') </script>`
    );
  }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
      console.log("processLogin");
      console.log("body:", req.body);
      const input: LoginInput = req.body;
      const result = await memberService.processLogin(input);
    // TODO: SESSIONS AUTHENTICATION
    
    req.session.member = result;
    req.session.save(function () {  // session success save bolgandan keyin bizning browser cookiesga "sid"ni joylaydi va...
      // res.send(result); // session collectionga "member-data (result)"ni borib joylaydi
    res.redirect("/admin/product/all");
    })

      // res.send(result);
    } catch (err) {
      console.log("Error, processLogin:", err);
      const message =
        err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
      res.send(
        `<script> alert("${message}"); window.location.replace('admin/login') </script>`
    );
    }
  };

  restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try {
      console.log("logout");
      req.session.destroy(function () {
        res.redirect("/admin");
      })
    } catch (err) {
      console.log("Error, logout:", err);
      res.redirect("/admin");
    }
  };

  /** TEST uchun */
  
  restaurantController.checkAuthSession = async (
    req: AdminRequest,
    res: Response
  ) => {
    try {
      console.log("checkAuthSession");
      if (req.session?.member)
        res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
      else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
    } catch (err) {
      console.log("Error, checkAuthSession:", err);
      res.send(err);
    }
  };

  /*** Faqatgina Authenticate bo`lgan membergina(Restaurant) kora olish mantigi ***/
  restaurantController.verifyRestaurant = (
  req: AdminRequest, 
  res: Response, 
  next: NextFunction) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
      req.member = req.session.member;
      next();
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(`<script> alert("${message}"); window.location.replace('/admin/login') </script>`)
  }
};


// NOTE: "ES2020" orqali
export default restaurantController;