const express = require("express");
const app = express();
const rp = require("request-promise");
const qs = require("querystring");
const KEY = "AIzaSyCiWZ6dmHKrOEnTRVX_MM9nBhhbWPv28bw";
// const {getDB} = require("./db");
// const usersRoute = require("./users");

// app.use(express.json())

// getDB()

// app.use('/users',usersRoute)

app.get('/videos', async (req, res) => {   
        const data = await requestVideos();
        data.map(value => {
            value.likes = 3;
            value.unLikes = 2;
            value.comments = "";
        });
        res.json(data);
        
        
})


    const requestVideos = async () => {
    let videoQuery = qs.stringify({
         part: "snippet",
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

     const respone = await rp(options);
     //console.log(respone)
     return respone.body.items
}
 

app.get('/search', async (req, res) => {   
    //console.log(req.query)
    const data = await searchVideos(req.query.q)
    res.json(data)
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
    const respone = await rp(options);
    console.log(respone.body.items[0])
     return respone.body.items
}


app.listen(5000);
