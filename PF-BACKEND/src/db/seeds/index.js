const Posts = require("../models/Posts");
const Restaurants = require("../models/Restaurants");
const Tables = require("../models/Tables");
const Users = require("../models/Users");

const restaurantSeed = {
    name: "Seed Restaurant",
    type_customer: "Restaurante",
    country: "Seed"
}

const postsSeed = {
    name: "Seed Posts",
    description: "Seed"
}

const tablesSeed = {
    capacity: 1
}

const usersSeed = {
    name: "Seed Users",
    description: "Seed",
    type_customer: "User"
}

const createSeeds = async () => {
    await Restaurants.create(restaurantSeed);
    await Posts.create(postsSeed);
    await Tables.create(tablesSeed);
    await Users.create(usersSeed);
}

module.exports = createSeeds;