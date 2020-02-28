const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/youtubeDB";

async function getDB() {
  await mongoose.connect(dbUrl, {     
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false   
})
}
// async function getPostsCollection() {
//     const client = await MongoClient.connect("mongodb://localhost:27017");
//     const db = client.db('users-list');
//     return db.collection('posts');
// }

module.exports = {
    getDB
    // getPostsCollection
};