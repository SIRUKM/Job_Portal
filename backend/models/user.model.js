import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    phoneNumber : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        required : true,
        enum : ["student", "recruiter"],
    },
    profile : {
        bio : {
            bio : {type : String},
            skills: {type : String},
            resume : {type : String},
            resumeOrignalName : {type : String},
            company : {type : mongoose.Schema.Types.ObjectId, ref : "Company"},
            profilePicture : {
                type : String,
                default : ""
            }
        },
    }
}, {timestamps : true});

export const User = mongoose.model("User", userSchema);