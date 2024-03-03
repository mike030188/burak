import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";

/* Service Models doim "class" lar orqali yasaladi */
class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> {  //  
        // console.log("Passed here!"); "<void>",
        // return "DONE"; "<string>"
        const exist = await this.memberModel
          .findOne({ memberType: MemberType.RESTAURANT })
          .exec();
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    
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
            { memberNick: input.memberNick }, 
            { memberNick: 1, memberPassword: 1 } // _id: 0, by default: 1 ga teng
          )
          .exec();
        if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = input.memberPassword === member.memberPassword;
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