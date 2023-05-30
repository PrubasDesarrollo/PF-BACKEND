const postOrdersController = require("../ordersController/postOrdersController");

const handlerPostOrders = async (req, res) => {
  try {
    const { idClient, products } = req.body;

    if (!idClient || !products || products.length === 0) {
      return res
        .status(400)
        .json({ error: "idClient and products are required" });
    }

    let data = await postOrdersController(idClient, products);

    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = handlerPostOrders;
