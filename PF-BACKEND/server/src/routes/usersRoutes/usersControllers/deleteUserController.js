const users = require('../../../db/models/Users');
const parseId = require('../../../utils/parseId');

const deleteUserController = (id) =>{
    return users.deleteOne({_id: parseId(id)});
}

module.exports = deleteUserController;