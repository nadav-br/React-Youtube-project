const express = require("express");
const app = express();
const rp = require("request-promise");
const qs = require("querystring");
const KEY = "AIzaSyCiWZ6dmHKrOEnTRVX_MM9nBhhbWPv28bw";
const dummy = [
  {
    id: 1,
    first_name: "Athene",
    last_name: "Golbourn",
    comment:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula."
  },
  {
    id: 2,
    first_name: "Cos",
    last_name: "Walden",
    comment:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum."
  },
  {
    id: 3,
    first_name: "Roselin",
    last_name: "Silverton",
    comment:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo."
  },
  {
    id: 4,
    first_name: "Bastien",
    last_name: "Jekyll",
    comment:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
  },
  {
    id: 5,
    first_name: "Kevin",
    last_name: "Bartkiewicz",
    comment:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio."
  }
];
// const {getDB} = require("./db");
// const usersRoute = require("./users");

// app.use(express.json())

// getDB()

// app.use('/users',usersRoute)

app.get("/videos", async (req, res) => {
  const data = await requestVideos();
  data.map(value => {
    value.likes = 3;
    value.unLikes = 2;
    value.comments = dummy;
  });
  res.json(data);
});

const requestVideos = async () => {
  let videoQuery = qs.stringify({
    part: "snippet",
    maxResults: 20,
    key: KEY,
    chart: "mostPopular"
  });

  let options = {
    method: "GET",
    url: `https://www.googleapis.com/youtube/v3/videos?${videoQuery}`,
    resolveWithFullResponse: true, //request-promise returns just the response body from a request. To get the full response object use reswuthall
    json: true // const data = await data.JSON();
  };

  const respone = await rp(options);
  //console.log(respone)
  return respone.body.items;
};

app.get("/search", async (req, res) => {
  //console.log(req.query)
  const data = await searchVideos(req.query.q);
  res.json(data);
});

const searchVideos = async value => {
  let searchQuery = qs.stringify({
    part: "snippet",
    key: KEY,
    q: value,
    maxResults: 20
  });

  let options = {
    method: "GET",
    url: `https://www.googleapis.com/youtube/v3/search?${searchQuery}`,
    resolveWithFullResponse: true,
    json: true // const data = await data.JSON();
  };
  const respone = await rp(options);
  console.log(respone.body.items[0]);
  return respone.body.items;
};

app.listen(5000);
