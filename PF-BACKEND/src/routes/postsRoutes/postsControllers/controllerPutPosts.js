const posts = require("../../../db/models/Posts");
const parseId = require("../../../utils/parseId");
const getIdPostController = require("../postsControllers/getIdPostController");

const controllerPutPosts = async (id, info) =>{
    let virula;    
    const idParsed = parseId(id)
    for(prop in info){
            if(prop === "rating"){
                virula = await posts.findOneAndUpdate(idParsed, {$push: info});
            }else if(prop === "tags"){
                virula = await posts.findOneAndUpdate(idParsed, {$addToSet: info})
            }else{
             virula = await posts.findOneAndUpdate(idParsed,{
                name: info.name,
                description: info.description,
                image: firebaseUrl,
                ingredients: info.ingredients,
                original: info.original,
                cost: info.cost,
                authorUser: info.authorUser,
                authorRest: info.authorRest 
            });
        }}
    
    
    return getIdPostController(idParsed);
}

module.exports = controllerPutPosts;