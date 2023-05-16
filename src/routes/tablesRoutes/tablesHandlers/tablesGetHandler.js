const tablesGetController = require("../tablesControllers/tablesGetController");

const tablesGetHandler = async (req, res) => {
    try {
        const tables = await tablesGetController();
        res.status(200).json({tables});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = tablesGetHandler;