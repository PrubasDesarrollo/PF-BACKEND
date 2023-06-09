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
            images: user.images,
            type_customer: user.type_customer,
            description: user.description,
            valoraciones: user.valoraciones ? user.valoraciones : [],
            rating: averageGrades(user.valoraciones || []),
            posts: user.menu,
            isAdmin: user.isAdmin,
            token: user.token,
            phone:user.phone,
            reservation: user.reservation
        }
    return newUser;
}

const controllerGetUser = async (id) => {
    const postsData = posts.find();
    const data = await users.find({_id: id})
                            .populate('posts')
                            .exec();
    let user = data.shift();
    return mapDataRating(user)
}

module.exports = controllerGetUser;