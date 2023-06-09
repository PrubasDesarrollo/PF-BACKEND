const posts = require("../../../db/models/Posts");

const controllerPostPosts = (data, firebaseUrls) =>{

    let post = {
        name: data.name,
        description: data.description,
        images: firebaseUrls,
        tags: data.tags,
        ingredients: data.ingredients,
        original: data.original,
        cost: data.cost,
        authorUser: data.authorUser,
        authorRest: data.authorRest 
    }
    return posts.create(post);
}

module.exports = controllerPostPosts;