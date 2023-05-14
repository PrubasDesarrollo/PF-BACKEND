const posts = require("../../../db/models/Posts");
const parseId = require("../../../utils/parseId");

const controllerPutPosts = (id, info) =>{
    const idPost = parseId(id);
    return posts.findByIdAndUpdate(idPost, info);
}

module.exports = controllerPutPosts;