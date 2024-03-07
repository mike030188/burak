import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs"; // * as => importing all exports from the "bcryptjs" module and assigning them to the variable bcrypt

/* Service Models doim "class" lar orqali yasaladi */
class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel;
    }

/** SPA */

    public async signup(input: MemberInput): Promise<Member> {    
      const salt = await bcrypt.genSalt();
      input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

      try {
        const result = await this.memberModel.create(input); // bu yerda "create" => static method
        result.memberPassword = "";
        return result.toJSON();
      } catch (err) {
        console.error("Error, model:signup", err);
        throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
      }
    }

    public async login(input: LoginInput): Promise<Member> {
      // TODO: Consider member status later 
      const member = await this.memberModel
        .findOne(
          { memberNick: input.memberNick }, 
          { memberNick: 1, memberPassword: 1 } // _id: 0, by default: 1 ga teng
        )
        .exec();
      if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

      /** comparing passwords via bcrypt **/
      const isMatch = await bcrypt.compare(
        input.memberPassword, 
        member.memberPassword
      );

      // const isMatch = input.memberPassword === member.memberPassword;
      // console.log("isMatch:", isMatch);
      if (!isMatch) {
        throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
      }

      // const result = await this.memberModel.findById(member._id).exec();        
      // console.log("result:", result);
      // return result;

      /** yuqoridagi kodni bu yerda togridan togri return qiliw, 'lean()' -> DB olingan ma`l.ni uzgartiriw un**/
      return await this.memberModel.findById(member._id).lean().exec();        



    }

/**SSR */
    //             method       parameter             return
    public async processSignup(input: MemberInput): Promise<Member> {  //  
        // console.log("Passed here!"); "<void>",
        // return "DONE"; "<string>"
        const exist = await this.memberModel
          .findOne({ memberType: MemberType.RESTAURANT })
          .exec();
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

        /***** Hashing Password code here after Signup process *****/
        // console.log("before:", input.memberPassword);
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
        // console.log("after:", input.memberPassword);
    
        try {
          const result = await this.memberModel.create(input); // bu yerda "create" => static method
          result.memberPassword = "";
          return result;
        } catch (err) {
          throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
      }
    
      public async processLogin(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
          .findOne(
            { memberNick: input.memberNick },    // Search
            { memberNick: 1, memberPassword: 1 } // optional: _id: 0, by default: 1 ga teng
          )
          .exec();
        if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        /** comparing passwords via bcrypt **/
        const isMatch = await bcrypt.compare(
          input.memberPassword, 
          member.memberPassword
        );

        // const isMatch = input.memberPassword === member.memberPassword;
        // console.log("isMatch:", isMatch);
        if (!isMatch) {
          throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        // const result = await this.memberModel.findById(member._id).exec();        
        // console.log("result:", result);
        // return result;

        /** yuqoridagi kodni bu yerda togridan togri return qiliw**/
        return await this.memberModel.findById(member._id).exec();        



      }
}

export default MemberService;