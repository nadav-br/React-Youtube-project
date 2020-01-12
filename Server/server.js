const express = require('express');
const app = express();

const videosList = [
    { id: "1", name: "Masha and the Bear", url: "https://www.youtube.com/embed/ac9a8mLgCHY"},    
    { id: "2", name: "ערוץ הופ!", url: "https://www.youtube.com/embed/tcMMmXpw6d8"},
    { id: "3", name: "Disney Junior Israel", url: "https://www.youtube.com/embed/_SWySRlRKaw"},
    { id: "4", name: "Disney Junior Israel", url: "https://www.youtube.com/embed/JWFdJHxVAKk"}
]

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.get('/videos', (req, res) => {    
    res.json(videosList);    
})

app.listen(5000);