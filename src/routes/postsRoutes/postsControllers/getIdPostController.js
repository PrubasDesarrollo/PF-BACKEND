const posts = require("../../../db/models/Posts");
const users = require("../../../db/models/Users");
const restaurants = require("../../../db/models/Restaurants");
const parseId = require("../../../utils/parseId");
const averageGrades = require("../../../utils/averageGrades");
const mapearComentarios = require("../../../utils/mapearComentarios");


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
            images: post.images,
            ingredients: post.ingredients,
            original: post.original,
            cost: post.cost,
            isActive: post.isActive,
            rating: averageGrades(post.valoraciones),
            comments: mapearComentarios(post.valoraciones),
            authorUser: post.authorUser,
            authorRest: post.authorRest,
        }
    });
    return mapData;
}

module.exports = getIdPostController;
