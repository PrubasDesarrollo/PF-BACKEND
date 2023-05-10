const users = require('../../../db/models/Users');
const parseId = require('../../../utils/parseId');

const controllerPutDataPosts = (idUser,posts) =>{
    const id = parseId(idUser);

    return users.findOneAndUpdate(id, {$push: {posts: posts}})
}

const controllerPutDataTable = (idUser,table) =>{
    const id = parseId(idUser);

    return users.findOneAndUpdate(id, {table: table})
}

module.exports = {
    controllerPutDataPosts,
    controllerPutDataTable
}