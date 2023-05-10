const getPostsController = require("../postsControllers/getPostsController")

const handlerGetPosts = async (req, res) => {
    try {
        const posts = await getPostsController();
        res.status(200).json({posts});
    } catch (error) {
        console.log(error);
    }
}




module.exports = handlerGetPosts;