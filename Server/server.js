const express = require("express");
const app = express();
const rp = require("request-promise");
const qs = require("querystring");
const KEY = "AIzaSyCiWZ6dmHKrOEnTRVX_MM9nBhhbWPv28bw";
const {getDB} = require("./db");
const moviesRoute = require("./movies");
const path = require('path');
const { MoviesModel } = require('./moviesModel')

app.use(express.json())
app.use('/movies', moviesRoute);
getDB()

// 1. express.static
app.use('/', express.static(path.join(__dirname, '../Client/build')));
// 2. Procfile : a> npm i , b> npm run build, c> node server.js
// 3. env vars: a> DB_URL , b> PORT

app.get('/videos', async (req, res) => {   
    try {
        const data = await requestVideos();
            data.map(item => ({
            ...item,
            comments: [],
            }))       
               
            data.forEach(movie => {
            const result = new MoviesModel(movie);
            result.save();
            })
    } catch(err) {        
        throw new Error(err);
    }                          
        // res.json(data)
        res.send(result);
})

    const requestVideos = async () => {
    let videoQuery = qs.stringify({
         part: "snippet, statistics",
        maxResults: 20,
         key: KEY,
        chart: 'mostPopular'
    })
     
    let options = {
         method: 'GET',
         url: `https://www.googleapis.com/youtube/v3/videos?${videoQuery}`,
         resolveWithFullResponse: true, //request-promise returns just the response body from a request. To get the full response object use reswuthall
         json: true // const data = await data.JSON();
    }
    try {
     const respone = await rp(options);     
     return respone.body.items;
    } catch(err) {       
        throw new Error(err);
    } 
} 

app.get('/search', async (req, res) => {  
    try {
        const data = await searchVideos(req.query.q)
            data.map(value => {
            value.statistics={
            viewCount:0,
            likeCount:0,
            dislikeCount:0,
            commentCount:0
            },
        value.comments = [],
        value.id = value.id.videoId
        })
    } catch(err) {       
        throw new Error(err);
    }                 
    res.json(data);
})

const searchVideos = async (value) => {
    let searchQuery = qs.stringify({
        part: 'snippet',
        key: KEY,
        q: value,
        maxResults: 20
    })
    
    let options = {
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?${searchQuery}`,
        resolveWithFullResponse: true, 
        json: true // const data = await data.JSON();
    }

    try {
        const respone = await rp(options);    
        return respone.body.items
    } catch(err) {       
        throw new Error(err);
    }   
    
}

app.listen(process.env.PORT || 5000);
