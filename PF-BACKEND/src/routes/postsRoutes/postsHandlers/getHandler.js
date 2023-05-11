const getPostsController = require("../postsControllers/getPostsController")
const modelateData = require("../../../utils/modelateData")

const handlerGetPosts = async (req, res) => {
    try {
        const {page} = req.query
        const posts = await getPostsController();
        let info = modelateData(page,posts)
        res.status(200).json(info);
    } catch (error) {
        console.log(error);
    }
}
//fagsffgdjskja



module.exports = handlerGetPosts;