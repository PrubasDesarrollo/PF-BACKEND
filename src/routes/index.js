const { Router } = require("express");
const mercadopago = require("mercadopago");
require("dotenv").config();

const usersRoutes = require("./usersRoutes/index");
const postsRoutes = require("./postsRoutes/index");
const restaurantsRoutes = require("./restaurantsRoutes/index");
const tablesRoutes = require("./tablesRoutes/index");
const deliveryRoutes = require("./deliveryRoutes/index");
const tokenRoute = require("./tokenRoute/index");
const bannedRoute = require("./bannedRoute/index");
const ordersRoute = require("./ordersRoute/index");
const adminRoutes = require("./adminRoutes/index");

const router = Router();

router.use("/users", usersRoutes);
router.use("/tables", tablesRoutes);
router.use("/posts", postsRoutes);
router.use("/restaurants", restaurantsRoutes);
router.use("/delivery", deliveryRoutes);
router.use("/tokenAdmin", tokenRoute);
router.use("/banned", bannedRoute);
router.use("/orders", ordersRoute);
router.use("/admin", adminRoutes);

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });
router.post("/payment", (req, res) => {
  const products = req.body; //array de productos

  try {
    var preference = {
      items: products.map((prod, index) => ({
        id: index + 1,
        title: prod.name,
        currency_id: "ARS",
        picture_url: prod.image,
        description: prod.description,
        category_id: "art",
        quantity: 1,
        unit_price: prod.cost,
      })),
      back_urls: {
        success: "https://pf-front-3-production.up.railway.app/home/aprobe",
        failure: "https://pf-front-3-production.up.railway.app/home/failure",
        pending: "https://pf-front-3-production.up.railway.app/home/failure",
      },
      auto_return: "approved",
      binary_mode: true,
      marketplace: "MP-ARGENTINA",
    };
    mercadopago.preferences
      .create(preference)
      .then((response) => res.status(200).send(response.body.init_point))
      .catch((error) => res.status(400).send({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
