const express = require('express');
const app = express();

const videosList = [
    { id: "1",description:"this is a description", author: "Masha and the Bear", url: "https://www.youtube.com/embed/ac9a8mLgCHY"},    
    { id: "2",description:"this is a description", author: "ערוץ הופ!", url: "https://www.youtube.com/embed/tcMMmXpw6d8"},
    { id: "3",description:"this is a description", author: "Disney Junior Israel", url: "https://www.youtube.com/embed/_SWySRlRKaw"},
    { id: "4",description:"this is a description", author: "Disney Junior Israel", url: "https://www.youtube.com/embed/JWFdJHxVAKk"},
    { id: "1",description:"this is a description", author: "Masha and the Bear", url: "https://www.youtube.com/embed/ac9a8mLgCHY"},    
    { id: "2",description:"this is a description", author: "ערוץ הופ!", url: "https://www.youtube.com/embed/tcMMmXpw6d8"},
    { id: "3",description:"this is a description", author: "Disney Junior Israel", url: "https://www.youtube.com/embed/_SWySRlRKaw"},
    { id: "4",description:"this is a description", author: "Disney Junior Israel", url: "https://www.youtube.com/embed/JWFdJHxVAKk"},{ id: "1",description:"this is a description", author: "Masha and the Bear", url: "https://www.youtube.com/embed/ac9a8mLgCHY"},    
    { id: "2",description:"this is a description", author: "ערוץ הופ!", url: "https://www.youtube.com/embed/tcMMmXpw6d8"},
    { id: "3",description:"this is a description", author: "Disney Junior Israel", url: "https://www.youtube.com/embed/_SWySRlRKaw"},
    { id: "4",description:"this is a description", author: "Disney Junior Israel", url: "https://www.youtube.com/embed/JWFdJHxVAKk"},
]

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.get('/videos', (req, res) => {    
    res.json(videosList);    
})

app.listen(5000);