const tables = require("../../../db/models/Tables");
const parseId = require("../../../utils/parseId");

const tablesDeleteController = (id) =>{
    const idBorrar = parseId(id);
    return tables.deleteOne({_id: idBorrar})
}



module.exports = tablesDeleteController;