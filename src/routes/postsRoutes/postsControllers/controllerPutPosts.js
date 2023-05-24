const posts = require("../../../db/models/Posts");
const parseId = require("../../../utils/parseId");

const controllerPutRating = (id, rating) =>{
    let idParsed = parseId(id)
    return posts.findOneAndUpdate(idParsed, {$push: {rating: rating}})
}

const controllerPutTags = (id, tags) =>{
    let idParsed = parseId(id)
    return posts.findOneAndUpdate(idParsed, {$push: {tags: tags}})
}

const controllerPutPosts = (id, info,firebaseUrl) =>{
    let idParsed = parseId(id)
    return posts.findOneAndUpdate(idParsed,{
            name: info.name,
            description: info.description,
            image: firebaseUrl,
            ingredients: info.ingredients,
            original: info.original,
            cost: info.cost,
            isActive: info.isActive,
            authorUser: info.authorUser,
            authorRest: info.authorRest 
            });
    
}

module.exports = {
    controllerPutTags,
    controllerPutRating,
    controllerPutPosts};