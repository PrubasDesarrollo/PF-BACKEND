const { Router } = require("express");
const mercadopago = require("mercadopago");
require("dotenv").config();

const usersRoutes = require("./usersRoutes/index");
const postsRoutes = require("./postsRoutes/index");
const restaurantsRoutes = require("./restaurantsRoutes/index");
const tablesRoutes = require("./tablesRoutes/index");
const tokenRoute = require("./tokenRoute/index");

const router = Router();

router.use("/users", usersRoutes);
router.use("/tables", tablesRoutes);
router.use("/posts", postsRoutes);
router.use("/restaurants", restaurantsRoutes);
router.use("/tokenAdmin", tokenRoute);

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });
router.post("/payment", (req, res) => {
  const prod = req.body;
  let preference = {
    items: [
      {
        id: 123,
        title: prod.name,
        currency_id: "USD",
        picture_url: prod.image,
        description: prod.description,
        category_id: "art",
        quantity: 1,
        unit_price: prod.cost,
      },
    ],
    back_urls: {
      success: "http://localhost:3000",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }));
});

module.exports = router;
