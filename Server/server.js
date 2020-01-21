const express = require('express')
const app = express();
const rp = require('request-promise');
const qs = require('querystring');
const KEY = 'AIzaSyCiWZ6dmHKrOEnTRVX_MM9nBhhbWPv28bw';


app.get('/videos', async (req, res) => {   
        const data = await requestVideos()
        res.json(data)
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
         resolveWithFullResponse: true, 
         json: true // const data = await data.JSON();
     }

     const respone = await rp(options);
     return respone.body.items
}




app.get('/search', async (req, res) => {   
    const data = await searchVideos()
    res.json(data)
})

const searchVideos = async () => {
    let searchQuery = qs.stringify({
        part: snippet,
        key: KEY,
        q,
    }) 

    let options = {
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?${searchQuery}`,
        resolveWithFullResponse: true, 
        json: true // const data = await data.JSON();
    }
    const respone = await rp(options);
    console.log(respone)
     return respone.body.items
}


app.listen(5000);

