const controllerPutPosts = require("../postsControllers/controllerPutPosts");

const handlerPutPost = async(req, res) =>{
    try {
        let {id} = req.params;
        let {info} = req.body;
        const post = await controllerPutPosts(id, info);
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = handlerPutPost;