const users = require('../../../db/models/Users');
const posts = require('../../../db/models/Posts');
const tables = require('../../../db/models/Tables');
const averageGrades = require('../../../utils/averageGrades')

const mapDataRating =  (user) => {
        let newUser = {
            id:user._id,
            name: user.name,
            isAdmin: user.isAdmin,
            email: user.email,
            image: user.image,
            type_customer: user.type_customer,
            description: user.description,
            valoraciones: user.valoraciones ? user.valoraciones : [0],
            rating: averageGrades(user.valoraciones),
            posts: user.menu,
            table: user.table,
            token: user.token
        }
    return newUser;
}

const controllerGetUser = async (id) => {
    const tablesData = tables.find();
    const postsData = posts.find();
    const data = await users.find({_id: id}).populate('posts').populate('table').exec();
    let user = data.shift();
    return mapDataRating(user)
}

module.exports = controllerGetUser;