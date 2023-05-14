const tables = require("../../../db/models/Tables");
const parseId = require("../../../utils/parseId");

const tablesPutController = (id, data) =>{
    const idParsed = parseId(id);
    return tables.findByIdAndUpdate(idParsed, data);
}

module.exports = tablesPutController;