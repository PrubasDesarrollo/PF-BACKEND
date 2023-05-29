const parseId = require("../../../utils/parseId");
const restaurants = require("../../../db/models/Restaurants");
const posts = require("../../../db/models/Posts");
const users = require("../../../db/models/Users");

const getTransactionsController = async (id) => {
    const idParsed = parseId(id);
    const posts = await posts.find();
    const restaurants = await restaurants.find();

    const transactions = await users.find({_id: idParsed}, {"transactions":1})
                                    .populate({path: "transactions", populate: {path: "restId"}})
                                    .populate({path: "transactions", populate: {path: "order"}})
    return transactions
}


module.exports = getTransactionsController;