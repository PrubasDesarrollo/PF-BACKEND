const parseId = require("../../../utils/parseId");
const restaurants = require("../../../db/models/Restaurants");
// const tables = require("../../../db/models/Tables");


const getTransactionsController = async (id) => {
    const idParsed = parseId(id);
    
    
    const transactions = await restaurants.findById(idParsed,'transactions').exec();

                                          
    // if(!transactions.length) return ["No has hecho transacciones aún"];
    return transactions;

}


module.exports = getTransactionsController;