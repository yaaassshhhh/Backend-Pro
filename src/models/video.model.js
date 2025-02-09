import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema =  new mongoose.Schema({
    videoFile : {
        type : String,
        required : [true, "Video File is required"]
    },
    thumbnail :{
        type : String,
        required : [true, "Thumbnail is required"]
    },
    title : {
        type : String,
        required : [true, "Title is required"]
    },
    description : {
        type : String,
        required : [true, "Description is required"]
    },
    duration : {
        type : Number,
        required : true
    }, 
    views : {
        type : Number,
        default : 0
    },
    isPublic : {
        type : Boolean,
        default : true
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
}, {timestamps : true})

videoSchema
export const Video = mongoose.model('Video', videoSchema);