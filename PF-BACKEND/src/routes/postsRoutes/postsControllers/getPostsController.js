const posts = require('../../../db/models/Posts');
const users = require('../../../db/models/Users');
const restaurants = require('../../../db/models/Restaurants');
const averageGrades = require("../../../utils/averageGrades");

const getPostsController = async () =>{
    const usersData = await users.find();
    const restaurantsData = await restaurants.find();
    const data = await posts.find().populate('authorUser').populate('authorRest').exec();
    const postRatings = await mapDataRating(data);

    return postRatings.sort((a, b) => b.rating - a.rating)
}

const getPostsOrdered = async (order) =>{
    const usersData = await users.find();
    const restaurantsData = await restaurants.find();
    const data = await posts.find().populate('authorUser').populate('authorRest').exec();
    const postRatings = await mapDataRating(data);

    if(order === "alphadesc"){
        return postRatings.sort((a, b) =>b.name - a.name)
    }
    if(order === "alphaasc"){
    return postRatings.sort((a, b) => a.name - b.name)
    }
    if(order === "ratingdesc"){
        return postRatings.sort((a, b) => Number(b.rating) - Number(a.rating))
    }
    if(order === "ratingasc"){
    return postRatings.sort((a, b) => Number(a.rating) - Number(b.rating))
}
}

const mapDataRating = async (data) => {
    const mapData = data.map((post) => {
        return{
            _id: post._id,
            name: post.name,
            description: post.description,
            ingredients: post.ingredients,
            original: post.original,
            cost: post.cost,
            rating: averageGrades(post.rating),
            authorUser: post.authorUser,
            authorRest: post.authorRest,
        }
    });
    return mapData;
}
module.exports = {
    getPostsController,
     getPostsOrdered};