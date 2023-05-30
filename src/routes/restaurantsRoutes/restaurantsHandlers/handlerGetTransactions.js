const getTransactionsController = require("../restaurantsControllers/getTransactionsController");

const handlerGetTransactions = async () =>{
        try {
            const { id } = req.params;
            const transactionsData = await getTransactionsController(id);
            res.status(200).json(transactionsData);
        } catch (error) {
            res.status(400).json({error: error.message})
        }


};

module.exports = handlerGetTransactions;