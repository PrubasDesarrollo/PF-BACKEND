const restaurants = require("../../../db/models/Restaurants");
// const union = require("../unionRestaurantPosts");
const tables = require("../../../db/models/Tables");
const posts = require("../../../db/models/Posts");
const averageGrades = require("../../../utils/averageGrades");

const getRestaurants = async () => {
    const tablesData = await tables.find();
    const postsData = await posts.find();
    const data = await restaurants.find().sort({name:-1}).exec();
    const restaurantRatings = await mapDataRating(data);

    return restaurantRatings.sort((a, b) => b.rating - a.rating)
}

const allRestaurantController = async() =>{
    const postsData = await posts.find();
    const data = await restaurants.find().exec();
    return data
}

const getRestaurantsRating = async (order) => {
    const tablesData = await tables.find();
    const postsData = await posts.find();
    const data = await restaurants.find().sort({name:-1}).exec();
    const restaurantRatings = await mapDataRating(data);

    if(order == "alphaasc"){
        return restaurantRatings.sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()
            if(nameA > nameB){
                return 1;
            }
            if(nameA < nameB){
                return -1
            }
            return 0
        });
    }
    if(order == "alphadesc"){
        return restaurantRatings.sort((a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()
            if(nameA > nameB){
                return -1;
            }
            if(nameA < nameB){
                return 1
            }
            return 0
        });
    }
    if(order == "ratingdesc"){
        return restaurantRatings.sort((a, b) => Number(b.rating) - Number(a.rating))
    }
    if(order == "ratingasc"){
        return restaurantRatings.sort((a, b) => Number(a.rating) - Number(b.rating))
    }
}

const filterByName = (name, restaurants) =>{
    console.log(name)
    let restaurantsFilter = restaurants.filter((rest) => {
        return rest.name.toLowerCase() === name.toLowerCase();
      });
      console.log(restaurantsFilter)
      return restaurantsFilter;
}

const mapDataRating = (data) => {
    const mapData = data.map((restaurant) => {
        return{
            _id: restaurant._id,
            name: restaurant.name,
            description: restaurant.description,
            type_customer: restaurant.type_customer,
            valoraciones: restaurant.valoraciones ? restaurant.valoraciones : [],
            rating: averageGrades(restaurant.valoraciones || []),
            city: restaurant.city,
            address: restaurant.address,
            country: restaurant.country,
            phoneNumber: restaurant.phoneNumber,
            tags: restaurant.tags,
            menu: restaurant.menu,
            images: restaurant.images,
            table: restaurant.table,
            email: restaurant.email,
            isActive: restaurant.isActive
        }
    });
    return mapData;
}

const filterByTag = (tag, restaurants) => {
    const tagsArray = tag.split("~");
    const info = restaurants.filter((restaurant) => tagsComparate(tagsArray, restaurant.tags));
    return info;
}

const tagsComparate = (tags, restaurantsTags) => {

    const tagsArrayLow = tags.map((tag)=> tag.toLowerCase());
    const restaurantTagsLow = restaurantsTags.map((tag) => tag.toLowerCase());
    return tagsArrayLow.every((tag) => restaurantTagsLow.includes(tag));
}

const filterByCountry = (country, restaurants) => {
    country = country.toLowerCase();
    return restaurants.filter((restaurant) => restaurant.country?.toLowerCase().includes(country));
}
const filterByCity = (city, restaurants) => {
    city = city.toLowerCase();
    return restaurants.filter((restaurant) => restaurant.city?.toLowerCase().includes(city));
}

const filterByEmail = async(restaurantEmail) =>{
    const tablesData = await tables.find();
    const postsData = await posts.find();
    const data = await restaurants.find({email:restaurantEmail})
    const dataRestaurant = data.shift();
    console.log('ESTO ES LO QUE DEVUELVE DATA'+data)
    console.log('ESTO ES LO QUE DEVUELVE DATARESTAURANT'+dataRestaurant)
    return dataRestaurant
}
const filterByRating = (rating, restaurants) => {
    return restaurants.filter((rest) => rest.rating >= rating)
}

module.exports ={
    getRestaurants,
    getRestaurantsRating,
    filterByTag,
    filterByCountry,
    filterByName,
    filterByEmail,
    filterByCity,
    filterByRating,
    allRestaurantController
};