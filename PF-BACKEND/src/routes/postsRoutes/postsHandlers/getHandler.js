const {getPostsController, getPostsOrdered} = require("../postsControllers/getPostsController")
const modelateData = require("../../../utils/modelateData")

const handlerGetPosts = async (req, res) => {
    try {
        const {page, order} = req.query;
        let posts;
        if(!order || order === "ratingdesc" ){
        posts = await getPostsController();}
        else{
        posts = await getPostsOrdered(order)
        }
        let info = modelateData(page,posts)
        res.status(200).json(info);
    } catch (error) {
        console.log(error);
    }
}
//fagsffgdjskja
//jhnkdjkjdjgf


module.exports = handlerGetPosts;