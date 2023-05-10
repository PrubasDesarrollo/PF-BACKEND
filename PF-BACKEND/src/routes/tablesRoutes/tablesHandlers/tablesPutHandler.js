const tablesPutController = require("../tablesControllers/tablesPutController");

const tablesPutHandler = async (req, res) =>{
    try {
        const {id} = req.params;
        const {data} = req.body;
        const actualizar = await tablesPutController(id, data);
        res.status(200).json({actualizar})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = tablesPutHandler;