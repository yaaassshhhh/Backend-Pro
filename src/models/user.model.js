import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 8);
    next();
})
userSchema.methods.verifyPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id : this._id,
        username : this.username,
        email : this.email,
        fullName : this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn : process.env.ACCESS.TOKEN.EXPIRY
    }
)
}
userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign({
        _id : this._id,
        username : this.username,
        email : this.email,
        fullName : this.fullName,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
export const User =  mongoose.build('User', userSchema);