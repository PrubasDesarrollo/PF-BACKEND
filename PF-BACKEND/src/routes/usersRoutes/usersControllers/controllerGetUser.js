const users = require('../../../db/models/Users');
const posts = require('../../../db/models/Posts');
const tables = require('../../../db/models/Tables');


const controllerGetUser = async (id) => {
    const tablesData = tables.find();
    const postsData = posts.find();
    const data = await users.find({_id: id}).populate('posts').populate('table').exec();
    return data.shift();
}

module.exports = controllerGetUser;