const users = require('../../../db/models/Users');
const parseId = require('../../../utils/parseId');
require('dotenv').config();
const { PASSWORD_ADMIN } = process.env

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

const controllerPutData = async(_id, data, firebaseUrls) =>{
    const idUser = parseId(_id);
    // const infoUsers = await users.find({_id:idUser})
    // let user = {
    //     name: data.name,
    //     email: data.email,
    //     image: [...infoUsers.images, ...images],
    //     type_customer: data.type_customer,
    //     description: data.description,
    //     isAdmin: data.isAdmin
    // }
    console.log(firebaseUrls)
    return await users.findOneAndUpdate(idUser, {
        name: data.name,
        email: data.email,
        type_customer: data.type_customer,
        description: data.description,
        isAdmin: data.isAdmin,
        phone: data.phone,
        country: data.country,
        city: data.city,
        address: data.address
    })
}

const controllerAdminUser=async(password, id) =>{
    const idUser = parseId(id);
    if(password==PASSWORD_ADMIN){
        return await users.findOneAndUpdate(idUser,{isAdmin:true})
    }else{throw new Error('Invalid Password')}
}

const controllerPutDataImages = async(id, firebaseUrls) =>{
    const idUser = parseId(id);
    return await users.findOneAndUpdate(idUser, {
        $push:{images:firebaseUrls},
    })
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
    controllerPutDataTable,
    controllerPutData,
    controllerPutDataValoraciones,
    controllerPutTransaction,
    controllerPutDataImages,
    controllerAdminUser
}