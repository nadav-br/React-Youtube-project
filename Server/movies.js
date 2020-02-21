const express = require("express");
const router = express.Router();
const { MoviesModel } = require('./moviesModel')

router.get("/", async (req, res) => {
    const movies = await MoviesModel
        .find({})        
        res.send(movies);           
        
});

router.get("/:id", async (req,res) => {
    
    const result = await MoviesModel.findOne({id:req.params.id})
    // console.log(result)
    const movie = await MoviesModel.findById(req.params.id)

    res.send(result)
})

router.delete("/:id", async (req, res) => {
    try {
    await MoviesModel.findByIdAndDelete(req.params.id)
    res.send("deleted")
    } catch (err) {
        res.status(400).send(err.massage)
    }    
})

router.put("/:id", async (req, res) => {
    const movie = await MoviesModel.findOneAndUpdate(req.params.id, {$set: req.body})
    res.send(movie)
})

router.post("/", async (req, res) => {    
    const movie = new MoviesModel(req.body)
    const result = await movie.save();
    res.send(result)
})



module.exports = router;