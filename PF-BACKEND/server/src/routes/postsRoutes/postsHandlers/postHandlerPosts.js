const controllerPostPosts = require("../postsControllers/PostPostsController");

const handlerPostPosts = async (req, res) =>{
    try {
        const data = req.body;
        let info = await controllerPostPosts(data);
        res.status(200).json(info);
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


module.exports = handlerPostPosts;