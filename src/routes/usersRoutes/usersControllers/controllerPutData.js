const users = require('../../../db/models/Users');
const parseId = require('../../../utils/parseId');

const controllerPutDataPosts = (_id,posts) =>{
    const idUser = parseId(_id);

    return users.findOneAndUpdate(idUser, {$addToSet: {posts: posts}})
}

const controllerPutDataTable = (_id,table) =>{
    const idUser = parseId(_id);

    return users.findOneAndUpdate(idUser, {table: table})
}

const controllerPutDataValoraciones = (_id,valoraciones) =>{
    const idUser = parseId(_id);

    return users.findOneAndUpdate(idUser, {$push: {valoraciones: valoraciones}})
}

const controllerPutData = (_id, data, image) =>{
    const idUser = parseId(_id);
    let user = {
        name: data.name,
        email: data.email,
        image: image,
        type_customer: data.type_customer,
        description: data.description,
        isAdmin: data.isAdmin
    }
    return users.findOneAndUpdate(idUser, user)
}

const controllerPutDataTransaction = (id, transaction) => {

    const idUser = parseId(id);

    return users.findOneAndUpdate(idUser, {$push: {transactions: transaction}})
}


module.exports = {
    controllerPutDataPosts,
    controllerPutDataTable,
    controllerPutData,
    controllerPutDataValoraciones,
    controllerPutDataTransaction
}