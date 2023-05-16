const tablesIdGetController = require("../tablesControllers/tablesIdGetController");

const tablesIdGetHandler = async ()=>{
    try {
        const {id} = req.params;
        const tableId = await tablesIdGetController(id);
        res.status(200).json(tableId);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = tablesIdGetHandler;