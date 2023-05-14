const tablePostController = require("../tablesControllers/tablePostController");

const tablePostHandler = async (req, res) =>{
    try {
        const data = req.body;
        let info = await tablePostController(data);
        res.status(200).json(info);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = tablePostHandler;