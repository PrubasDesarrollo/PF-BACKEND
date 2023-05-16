const deletePostController = require("../postsControllers/deletePostController");

const handlerDeletePosts = async(req, res) =>{
    try {
        const {id} = req.params;
        const postDelete = await deletePostController(id);
        res.status(200).json(postDelete);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerDeletePosts;