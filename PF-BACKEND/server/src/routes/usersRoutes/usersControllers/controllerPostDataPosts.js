const users = require('../../../db/models/Users')
const parseId = require('../../../utils/parseId')

const controllerPostDataPosts = (id,posts) =>{
    const idUser = parseId(id);
    return users.findOneAndUpdate(idUser, {$addToSet: {posts: posts}})
}
module.exports = controllerPostDataPosts