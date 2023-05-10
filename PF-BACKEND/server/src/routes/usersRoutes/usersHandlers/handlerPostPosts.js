const controllerPostDataPosts = require('../usersControllers/controllerPostDataPosts')

const handlerPostPosts = async(req,res) =>{
    try{
        let {id} = req.params
        let {posts} = req.body;
        const user = await controllerPostDataPosts(id,posts);
        res.status(200).json(user)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = handlerPostPosts;