const tables = require("../../../db/models/Tables");
const users = require("../../../db/models/Users");

const tablesGetController = () =>{
    const user = users.find();

    return tables.find().populate('diners').exec();
}

module.exports = tablesGetController;