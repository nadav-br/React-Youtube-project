const  {Schema, model } = require("mongoose")


const MovieSchema = new Schema({
    snippet: {
        title: String,
        thumbnails: {
            default:{
                url: String,
            },
            medium: {
                url: String,
            }
        },
        description: String,
    },
    comments: [
        {
        user: String,
        comment: String,
        }
    ],
    id: {
        type: String,
        required: true,
    },
    statistics: {
        viewCount: Number,
        likeCount: Number,
        dislikeCount: Number,
        commentCount: Number,

    },
    // likes: Number,
    // unLikes: Number,        
    
    // views: Number,
    
})

const MoviesModel = model("movie", MovieSchema);

module.exports = {
    MoviesModel
}