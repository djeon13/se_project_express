const router = require("express").Router();

const auth = require("../middlewares/auth");

const userRoutes = require("./users");
const clothingRoutes = require("./clothingItems");

const { createUser, login } = require("../controllers/users");
const { getItems } = require("../controllers/clothingItems");

const {
  validateCreateUser,
  validateLogin,
} = require("../middlewares/validation");

const NotFoundError = require("../errors/not-found-err");

router.post("/signup", validateCreateUser, createUser);

router.post("/signin", validateLogin, login);

router.get("/items", getItems);

router.use(auth);

router.use("/users", userRoutes);
router.use("/items", clothingRoutes);

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;