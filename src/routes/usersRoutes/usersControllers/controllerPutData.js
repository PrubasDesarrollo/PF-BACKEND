const users = require('../../../db/models/Users');
const parseId = require('../../../utils/parseId');

const controllerPutDataPosts = (_id,posts) =>{
    const idUser = parseId(_id);

    return users.findOneAndUpdate(idUser, {$addToSet: {posts: posts}})
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

const controllerPutTransaction = async (id, transaction) =>{
    const idUser = parseId(id);

    const { restId, ordered, cost, createdAt } = transaction;
    const transactionData = {
        restaurant: parseId(restId),
        order: ordered.map((order) => parseId(order)),
        cost: cost,
        date: createdAt
    }
    return await users.findByIdAndUpdate(idUser, {$push: {transactions: transactionData}})

}


module.exports = {
    controllerPutDataPosts,
    
    controllerPutData,
    controllerPutDataValoraciones,
    controllerPutTransaction
}