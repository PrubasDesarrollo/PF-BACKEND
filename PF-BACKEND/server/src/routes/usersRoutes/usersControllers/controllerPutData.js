const users = require('../../../db/models/Users');
const parseId = require('../../../utils/parseId');

const controllerPutDataPosts = (_id,posts) =>{
    const idUser = parseId(_id);

    return users.findOneAndUpdate(idUser, {$push: {posts: posts}})
}

const controllerPutDataTable = (_id,table) =>{
    const idUser = parseId(_id);

    return users.findOneAndUpdate(idUser, {table: table})
}

const controllerPutData = (data) =>{
    const idUser = parseId(data._id);

    return users.findOneAndUpdate(idUser, data)
}

module.exports = {
    controllerPutDataPosts,
    controllerPutDataTable,
    controllerPutData
}