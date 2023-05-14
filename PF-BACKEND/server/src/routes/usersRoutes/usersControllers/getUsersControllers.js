const users = require('../../../db/models/Users');
const posts = require('../../../db/models/Posts');
const tables = require('../../../db/models/Tables');

const getUserController = () =>{
    const tablesData = tables.find();
    const postsData = posts.find();
    return users.find().populate('posts').populate('table').exec()
}

module.exports = getUserController; 