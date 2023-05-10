const tables = require("../../../db/models/Tables");

const tablesGetController = () =>{
    return tables.find().exec();
}

module.exports = tablesGetController;