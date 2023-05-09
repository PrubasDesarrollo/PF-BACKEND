const { Router } = require("express");

const usersRoutes = require("./usersRoutes/index");
const postsRoutes = require("./postsRoutes/index");
const restaurantsRoutes = require("./restaurantsRoutes/index");

const router = Router();

router.use("/users", usersRoutes);
router.use("/posts", postsRoutes);
router.use("/restaurants", restaurantsRoutes);

module.exports = router;
