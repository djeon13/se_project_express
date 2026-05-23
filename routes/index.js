const router = require("express").Router();

const userRoutes = require("./users");
const clothingRoutes = require("./clothingItems");

const { NOT_FOUND } = require("../utils/errors");

router.use("/users", userRoutes);

router.use("/items", clothingRoutes);

router.use((req, res) => {
  res.status(NOT_FOUND).send({
    message: "Requested resource not found",
  });
});

module.exports = router;