const  {Schema, model } = require("mongoose")


const MovieSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
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
    statistics: {
        viewCount: Number,
        likeCount: Number,
        dislikeCount: Number,
        commentCount: Number,

    },
    // likes: Number,
    // unLikes: Number,        
    comments: Array,
    // views: Number,
    
})

const MoviesModel = model("movie", MovieSchema);

module.exports = {
    MoviesModel
}