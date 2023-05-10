const tables = require("../../../db/models/Tables");

const tablesIdGetController = async () => {
    const data = await tables.find({_id: id}).exec();
    return data.shift();

};

module.exports = tablesIdGetController;