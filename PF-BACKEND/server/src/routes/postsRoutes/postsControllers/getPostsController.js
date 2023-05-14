const posts = require('../../../db/models/Posts');
const users = require('../../../db/models/Users');
const restaurants = require('../../../db/models/Restaurants');

const getPostsController = () =>{
    const usersData = users.find();
    const restaurantsData = restaurants.find();
    return posts.find().populate('authorUser').populate('authorRest').exec();
}


module.exports = getPostsController;