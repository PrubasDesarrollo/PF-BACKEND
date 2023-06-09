const posts = require('../../../db/models/Posts');
const users = require('../../../db/models/Users');
const restaurants = require('../../../db/models/Restaurants');
const averageGrades = require("../../../utils/averageGrades");

const getPostsController = async () =>{
    const usersData = await users.find();
    const restaurantsData = await restaurants.find();
    const data = await posts.find().populate('authorUser').populate('authorRest').exec();
    const postRatings = await mapDataRating(data);

    return postRatings.sort((a, b) => Number(b.rating) - Number(a.rating))
}

const getPostsOrdered = async (order) =>{
    const usersData = await users.find();
    const restaurantsData = await restaurants.find();
    const data = await posts.find().populate('authorUser').populate('authorRest').exec();
    const postRatings = await mapDataRating(data);

    if(order === "alphaasc"){
        return await postRatings.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if(nameA > nameB){
                return 1;
            }
            if(nameA < nameB){
                return -1
            }
            return 0
        });
        }
    if(order === "alphadesc"){
    return await postRatings.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if(nameA > nameB){
            return -1;
        }
        if(nameA < nameB){
            return 1
        }
        return 0
    });
}
    if(order === "ratingdesc"){
        return await postRatings.sort((a, b) => Number(b.rating) - Number(a.rating))
    }
    if(order === "ratingasc"){
    return await postRatings.sort((a, b) => Number(a.rating) - Number(b.rating))
}
if(order === "costdesc"){
    return await postRatings.sort((a, b) => Number(b.cost) - Number(a.cost))
}
if(order === "costasc"){
return await postRatings.sort((a, b) => Number(a.cost) - Number(b.cost))
}
}
const filterByTag = (tag, posts) =>{
    let tagArray = tag.split("~");
    let data = posts;
    for(t of tagArray){
        const algo = data.filter((post) => post.tags.includes(t));
        data = algo;
    }
    return data;
}
const filterByCost = (cost, posts) =>{
    const data = posts.filter(post => post.cost <= cost);
    return data;
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
            rating: averageGrades(post.valoraciones),
            isActive: post.isActive,
            authorUser: post.authorUser,
            authorRest: post.authorRest,
        }
    });
    return mapData;
}
module.exports = {
    getPostsController,
     getPostsOrdered,
     filterByTag,
     filterByCost};