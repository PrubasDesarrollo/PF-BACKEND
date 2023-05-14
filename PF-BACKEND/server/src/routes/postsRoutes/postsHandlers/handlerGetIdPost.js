const getIdPostController = require("../postsControllers/getIdPostController")

const handlerGetIdPost = async (req, res) => {
    try{const {id} = req.params;
    const postData = await getIdPostController(id);
    res.status(200).json(postData);}
    catch(error){
        res.status(400).json({error: error.message});
    }
}


module.exports = handlerGetIdPost;