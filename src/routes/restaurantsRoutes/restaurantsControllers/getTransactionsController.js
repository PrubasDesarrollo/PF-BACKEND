const parseId = require("../../../utils/parseId");
const restaurants = require("../../../db/models/Restaurants");
const tables = require("../../../db/models/Tables");
const posts = require("../../../db/models/Posts");
const users = require("../../../db/models/Users");

const getTransactionsController = async (id) => {
    const idParsed = parseId(id);
    const posts = await posts.find();
    const users = await users.find();

    const transactions = await restaurants.find({_id: idParsed}, {"transactions":1})
                                          .populate({path: "transactions", populate: {path: "userId"}})
                                          .populate({path: "transactions", populate: {path: "order"}})
                                          

    // if(!transactions.length) return ["No has hecho transacciones aún"];
    return transactions;

}


module.exports = getTransactionsController;