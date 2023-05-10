const tables = require("../../../db/models/Tables");
const parseId = require("../../../utils/parseId")

const getIdPostController = async (id) => {
    const idParse = parseId(id)
    const data = await tables.find({_id: id}).exec();
    return data.shift();
}

module.exports = getIdPostController;