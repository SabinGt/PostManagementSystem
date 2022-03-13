const express = require('express')
const router = express.Router()
const {Posts} = require("../models")

router.get("/",async (req,res)=>{
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
    
});

router.get('/byId/:id',async (req,res)=>{
    
    const id = req.params.id
    const post = await Posts.findByPk(id)
    res.json(post);

})

router.post("/",async(req,res)=>{
    //get data from form as an object 
    const post = req.body;
    //sequelize post data into table posts in database
    await Posts.create(post);
    res.json(post);

});
module.exports = router 