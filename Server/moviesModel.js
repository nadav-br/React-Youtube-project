const  {Schema, model } = require("mongoose")


const MovieSchema = new Schema({
    id: {
        type: String,
        required: true
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
        }

    },
    
    likes: Number,
    unLikes: Number,        
    comments: Object,
    views: Number,
    
})

const MoviesModel = model("movie", MovieSchema);

module.exports = {
    MoviesModel
}