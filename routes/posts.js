const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// gets all posts
router.get('/', async (req, res) => {
    try{
        //.find() returns all posts
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err.message});
    }
});

// gets a specific post
router.get('/:postId', async (req, res) => {
    //console.log(req.params.postId);
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err.message});
    }
});


//submits a post
router.post('/', async (req, res)=>{
    //console.log(req.body);

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err.message});
    }
});

//deletes a post
router.delete('/:postId', async (req, res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err.message});
    }
})


//update a title of a post
router.patch('/:postId', async (req, res)=>{
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: { title: req.body.title}});
        res.json(updatePost);
    }catch(err){
        res.json({message: err.message});
    }
})


module.exports = router;