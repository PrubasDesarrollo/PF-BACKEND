const posts = require("../../../db/models/Posts")
const parseId = require("../../../utils/parseId");

const deletePostController = (id) =>{
    return posts.deleteOne({_id: parseId(id)})
}

module.exports = deletePostController;