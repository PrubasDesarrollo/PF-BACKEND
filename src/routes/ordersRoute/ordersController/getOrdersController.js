const Orders = require("../../../db/models/Orders");

const getOrdersController = (idClient) => {
  return Orders.find({ idClient: idClient });
};

module.exports = getOrdersController;
