const parseId = require("../../../utils/parseId");

const users = require("../../../db/models/Users");

const getTransactionsController = async (id) => {
    const idParsed = parseId(id);
    

    const transactions = await users.findById(idParsed,'transactions').exec();
    return transactions;
}


module.exports = getTransactionsController;