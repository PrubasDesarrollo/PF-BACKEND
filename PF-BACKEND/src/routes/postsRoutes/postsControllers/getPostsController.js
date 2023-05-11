const posts = require('../../../db/models/Posts');
const users = require('../../../db/models/Users');
const restaurants = require('../../../db/models/Restaurants');
const averageGrades = require("../../../utils/averageGrades");

const getPostsController = async () =>{
    const usersData = await users.find();
    const restaurantsData = await restaurants.find();
    const data = posts.find().sort({rating: -1}).populate('authorUser').populate('authorRest').exec();
    const postRatings = await mapDataRating(data);

    return postRatings.sort((a, b) => b.rating - a.rating)
}

const getPostsOrdered = async (order) =>{
    if(order === "alphdesc"){
        return postRatings.sort((a, b) =>b.name - a.name)
    }else if(order === "alphaasc"){
    return postRatings.sort((a, b) => a.name - b.name)
}   else if(order === "ratingasc"){
    return postRatings.sort((a, b) => a.rating - b.rating)
}
}

const mapDataRating = async (data) => {
    const mapData = data.map((post) => {
        return{
            name: post.name,
            description: post.description,
            ingredients: post.ingredients,
            original: post.original,
            cost: post.cost,
            rating: averageGrades(post.rating),
            authorUser: post.authorUser ? post.authorUser : "" ,
            authorRest: post.authorRest ? post.authorRest : ""
        }
    })
}
module.exports = {getPostsController, getPostsOrdered};