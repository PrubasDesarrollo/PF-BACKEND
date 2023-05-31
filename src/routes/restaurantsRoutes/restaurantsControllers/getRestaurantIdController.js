const restaurants = require("../../../db/models/Restaurants");
const tables = require("../../../db/models/Tables");
const posts = require("../../../db/models/Posts");
const parseId = require("../../../utils/parseId");
const averageGrades = require("../../../utils/averageGrades");
const mapearComentarios = require("../../../utils/mapearComentarios");

const modelateData = (data) => {
  const restaurant = {
    name: data.name,
    type_customer: data.type_customer,
    description: data.description,
    rating: averageGrades(data.valoraciones || []),
    comments: mapearComentarios(data.valoraciones),
    valorations: data.valoraciones,
    city: data.city,
    address: data.address,
    country: data.country,
    images: data.images,
    phoneNumber: data.phoneNumber,
    tags: data.tags,
    menu: data.menu,
    email: data.email,
    isActive: data.isActive,
  };
  return restaurant;
};

const getRestaurantIdController = async (id) => {
  const idParsed = parseId(id);
  const tablesData = await tables.find();
  const postsData = await posts.find();
  let data = await restaurants
    .find({ _id: idParsed })
    .populate("menu")
    .exec();
  data = data.shift();
  return modelateData(data);
};

module.exports = getRestaurantIdController;
