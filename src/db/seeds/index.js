const Posts = require("../models/Posts");
const Restaurants = require("../models/Restaurants");
const Tables = require("../models/Tables");
const Users = require("../models/Users");

const restaurantSeed = {
    name: "Seed Restaurant",
    email: "exampleSeed@example.com",
    type_customer: "Restaurante",
    country: "Seed",
    address:"seed",
    city:"seed",
    description: "description seed"
}

const postsSeed = {
    name: "Seed Posts",
    description: "Seed"
}

const tablesSeed = {
    capacity: 1,
    dateBooking: "07/08/2023"
}

const usersSeed = {
    name: "Seed Users",
    description: "Seed",
    type_customer: "User",
    email: "exampleSeed@algo.com",
    city:"seed",
    address: "seed",
    country:"seed"
}

const createSeeds = async () => {
    await Restaurants.create(restaurantSeed);
    await Posts.create(postsSeed);
    await Tables.create(tablesSeed);
    await Users.create(usersSeed);
}

module.exports = createSeeds;