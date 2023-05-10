const tablesDeleteController = require("../tablesControllers/tablesDeleteController");

const tablesDeleteHandler = async (req, res) =>{
    try {
        const {id} = req.params;
        const borrar = await tablesDeleteController(id);
        res.status(200).json({borrar});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = tablesDeleteHandler;