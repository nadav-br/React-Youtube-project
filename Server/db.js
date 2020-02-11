const mongoose = require("mongoose");

async function getDB() {
     await mongoose.connect("mongodb://localhost:27017/youtubeDB", {     
    useNewUrlParser: true,
  useUnifiedTopology: true   
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