const {getPostsController, getPostsOrdered, filterByTag, filterByCost} = require("../postsControllers/getPostsController")
const modelateData = require("../../../utils/modelateData")

const handlerGetPosts = async (req, res) => {
    try {
        const {page, order, tagged, cost} = req.query;
        let posts;
        if(!order){
        posts = await getPostsController();
        }else{
        posts = await getPostsOrdered(order)
        }
        if(tagged){
            const {tag} = req.body;            
            let filterByTags = filterByTag(tag, posts);
            posts = filterByTags;
        }
        if(cost){
            const cheaperThan = filterByCost(cost, posts);
            posts = cheaperThan;
        }
        let info = modelateData(page,posts)
        res.status(200).json(info);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = handlerGetPosts;