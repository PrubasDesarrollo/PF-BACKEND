const controllerPutPosts = require("../postsControllers/controllerPutPosts");

const handlerPutPost = async(req, res) =>{
    try {
        let {id} = req.params;
        let info = req.body;
        let {firebaseUrl} = req.file ? req.file : "";
        const post = await controllerPutPosts(id, info, firebaseUrl);
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = handlerPutPost;