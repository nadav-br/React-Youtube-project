const express = require('express');
const fs = require('fs');
const app = express();

const videosList = [{    
    "id": "1",
    "name": "Masha and the Bear",
    "url": "https://www.youtube.com/watch?v=ac9a8mLgCHY"

},    
{
     "id": "2",
    "name": "ערוץ הופ!",
    "url": "https://www.youtube.com/watch?v=tcMMmXpw6d8"
},
{
    "id": "3",
    "name": "Disney Junior Israel",
    "url": "https://www.youtube.com/watch?v=XIepGJvUA7I"
},
{
    "id": "4",
    "name": "Disney Junior Israel",
    "url": "https://www.youtube.com/watch?v=JWFdJHxVAKk"
}]

app.get('/', (req, res) => {
    res.send(fs.readFileSync('index.js', { encoding: 'UTF-8' })
    )
})

app.listen(5000);