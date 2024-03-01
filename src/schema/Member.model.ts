import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";


const memberSchema = new Schema (
    {
        memberType: {
            type: String,
            enum: MemberType,
            default: MemberType.USER,
            // required: false
        },

        memberStatus: {
            type: String,
            enum: MemberStatus,
            default: MemberStatus.ACTIVE,
            // required: false
        },

        memberNick: {
            type: String,
            index: { unique: true, sparse: true }, // nickname faqat 1ta bolishi kk
            required: true, // DBda bo`lishi talab etiladi
        },

        memberPhone: {
            type: String,
            index: { unique: true, sparse: true }, // tel.raqam faqat 1ta bolishi kk
            required: true, // DBda bo`lishi talab etiladi
        },

        memberPassword: {
            type: String,
            select: false, // password 
            required: true, // DBda bo`lishi talab etiladi
        },

        memberAddress: {
            type: String,
        },

        memberDesc: {
            type: String,
        },

        memberImage: {
            type: String,
        },

        memberPoints: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true } // updatedAt, createdAt
);

export default mongoose.model("Member", memberSchema);