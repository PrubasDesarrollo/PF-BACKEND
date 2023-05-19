const { Router } = require("express");

const usersRoutes = require("./usersRoutes/index");
const postsRoutes = require("./postsRoutes/index");
const restaurantsRoutes = require("./restaurantsRoutes/index");
const tablesRoutes = require("./tablesRoutes/index");
const uploadRoutes = require("./uploadRoutes/index");
const bookingsRoutes = require("./bookings/index");

const router = Router();

router.use("/users", usersRoutes);
router.use("/tables", tablesRoutes);
router.use("/posts", postsRoutes);
router.use("/restaurants", restaurantsRoutes);
router.use("/upload", uploadRoutes);
router.use("/bookings", bookingsRoutes);

module.exports = router;
