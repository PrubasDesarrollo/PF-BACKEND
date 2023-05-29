const Orders = require("../../../db/models/Orders");

const postOrdersController = (idClient, products) => {
  let order = {
    idClient: idClient,
    products: products,
  };
  return Orders.create(order);
};

module.exports = postOrdersController;
