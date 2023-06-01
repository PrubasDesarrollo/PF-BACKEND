const Restaurants = require("../db/models/Restaurants");
const posts = require("../db/models/Posts");
const users = require("../db/models/Users");


const createTransaction = async (idParsed, transactionData) =>{

    const {userID,order,cost,date} = transactionData;
    const platos = await posts.find({_id: {$in: order}}).exec();
    console.log("esto es platos: "+platos)
    const restaurant = await Restaurants.findById(idParsed, 'name phoneNumber');
    console.log("esta es la data del restaurant: "+restaurant)
    const user = await users.findById(userID, 'name phone');
    console.log("esta es la data user "+user)
    const userTransaction =  await {restaurant: restaurant, platos: platos, cost : cost, date: date};
    const restTransaction =  await {user: user, platos: platos, cost : cost, date: date};
    console.log("esto es "+userTransaction)
    console.log("esto es "+restTransaction)
    
    await users.findByIdAndUpdate(userID, {transaction: userTransaction})
    
    return restTransaction
}

module.exports = createTransaction;