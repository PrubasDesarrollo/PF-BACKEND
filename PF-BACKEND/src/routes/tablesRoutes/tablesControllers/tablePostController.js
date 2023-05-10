const tables = require("../../../db/models/Tables");

const tablePostController = (data) =>{
    return tables.create(data)
}

module.exports = tablePostController;