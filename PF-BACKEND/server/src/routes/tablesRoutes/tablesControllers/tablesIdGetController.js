const tables = require("../../../db/models/Tables");
const users = require("../../../db/models/Users");

const tablesIdGetController = async () => {
    const user = users.find();
    const data = await tables.find({_id: id}).populate('diners').exec();
    return data.shift();

};

module.exports = tablesIdGetController;