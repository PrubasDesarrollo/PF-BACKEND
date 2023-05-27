const getOrdersController = require("../ordersController/getOrdersController");

const handlerPostOrders = async (req, res) => {
  try {
    const { idClient } = req.body;

    if (!idClient) {
      return res.status(400).json({ error: "idClient is required" });
    }

    let data = await getOrdersController(idClient);

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = handlerPostOrders;
