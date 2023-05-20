const { Router } = require("express");

const usersRoutes = require("./usersRoutes/index");
const postsRoutes = require("./postsRoutes/index");
const restaurantsRoutes = require("./restaurantsRoutes/index");
const tablesRoutes = require("./tablesRoutes/index");
const deliveryRoutes = require("./deliveryRoutes/index");
const tokenRoute = require("./tokenRoute/index");

const router = Router();

router.use("/users", usersRoutes);
router.use("/tables", tablesRoutes);
router.use("/posts", postsRoutes);
router.use("/restaurants", restaurantsRoutes);
router.use("/delivery", deliveryRoutes)
router.use("/tokenAdmin", tokenRoute);

module.exports = router;
