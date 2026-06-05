const router = require("express").Router();

const auth = require("../middlewares/auth");

const userRoutes = require("./users");
const clothingRoutes = require("./clothingItems");

const { createUser, login } = require("../controllers/users");
const { NOT_FOUND } = require("../utils/errors");

router.post("/signup", createUser);
router.post("/signin", login);


router.get("/items", require("../controllers/clothingItems").getItems);


router.use(auth);

router.use("/users", userRoutes);
router.use("/items", clothingRoutes);

router.use((req, res) => {
  res.status(NOT_FOUND).send({
    message: "Requested resource not found",
  });
});

module.exports = router;