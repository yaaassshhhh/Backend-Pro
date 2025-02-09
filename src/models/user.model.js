import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username : {
        type : String , 
        required : [true , "Password is required"],
        unique : [true , "Username must be unique"],
        lowercase : true,
        trim : true,
        index : true
    },
    email : {
        type : String , 
        required : [true , "Email is required"],
        unique : [true , "Email must be unique"],
        lowercase : true,
        trim : true
    },
    fullName : {
        type : String , 
        required : [true , "Full Name is required"],
        trim : true,
        index : true
    },
    avatar : {
        type : String,
        required : [true , "Avatar is required"],
    },
    coverImage : {
        type : String,
    },
    watchHistory : [
        {
            type : Schema.Types.ObjectId,
            ref : "Video"
        }
    ],
    password : {
        type : String,
        required : [true , "Password is required"],
    },
    refreshToken : {
        type : String,
    }

}, {timestamps : true})

export const User =  mongoose.build('User', userSchema);