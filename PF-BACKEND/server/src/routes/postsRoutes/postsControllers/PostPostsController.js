const posts = require("../../../db/models/Posts");

const controllerPostPosts = (data) =>{
    return posts.create(data);
}

module.exports = controllerPostPosts;