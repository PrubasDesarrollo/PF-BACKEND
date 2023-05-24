const posts = require("../../../db/models/Posts");
const users = require("../../../db/models/Users");
const restaurants = require("../../../db/models/Restaurants");
const parseId = require("../../../utils/parseId");
const averageGrades = require("../../../utils/averageGrades");



const getIdPostController = async (id) => {
    const user = users.find();
    const restaurant = restaurants.find();
    const idParse = parseId(id)
    const data = await posts.find({_id: idParse}).populate('authorUser').populate('authorRest').exec();
    const dataMap = await mapDataRating(data);
    return dataMap.shift();
}

const mapDataRating = async (data) => {
    const mapData = data.map((post) => {
        return{
            _id: post._id,
            name: post.name,
            description: post.description,
            image: post.image,
            ingredients: post.ingredients,
            original: post.original,
            cost: post.cost,
            isActive: post.isActive,
            rating: averageGrades(post.rating),
            authorUser: post.authorUser,
            authorRest: post.authorRest,
        }
    });
    return mapData;
}

module.exports = getIdPostController;
