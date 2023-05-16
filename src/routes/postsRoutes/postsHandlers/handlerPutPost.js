const {controllerPutPosts, controllerPutTags, controllerPutRating} = require("../postsControllers/controllerPutPosts");

const handlerPutPost = async(req, res) =>{
    try {
        let {id} = req.params;
        let info = req.body;
        let {firebaseUrl} = req.file ? req.file : "";
        let validator;
        for(bandera in info){
            validator = bandera;
        }
        let post;
        for(virula in info){
            if(virula === "rating"){
                let {rating} = req.body
                post = await controllerPutRating(id, rating)
            }
            else if(virula === "tags"){
                let {tags} = req.body
                post = await controllerPutTags(id, tags)
            }
            else{
                post = await controllerPutPosts(id, info, firebaseUrl);
            }
        }
        // const post = await controllerPutPosts(id, info, firebaseUrl);
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = handlerPutPost;