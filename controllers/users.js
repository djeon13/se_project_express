const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

const {
  BAD_REQUEST,
  UNAUTHORIZED,
  SERVER_ERROR,
} = require("../utils/errors");


const getCurrentUser = (req, res) => {
  User.findById(req.user._id)
    .orFail()
    .then((user) => res.send(user))

    .catch((err) => {
      console.error(err);

      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({
          message: "User not found",
        });
      }

      if (err.name === "CastError") {
        return res.status(BAD_REQUEST).send({
          message: "Invalid user ID",
        });
      }

      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server",
      });
    });
};

const createUser = (req, res) => {
  const {
    name,
    avatar,
    email,
    password,
  } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) =>
      User.create({
        name,
        avatar,
        email,
        password: hash,
      }))
    .then((user) =>
      res.send({
        _id: user._id,
        name: user.name,
        avatar: user.avatar,
        email: user.email,
      }))
    .catch((err) => {
      console.error(err);

      if (err.name === "ValidationError") {
        return res.status(BAD_REQUEST).send({
          message: "Invalid data",
        });
      }

      if (err.code === 11000) {
        return res.status(CONFLICT).send({
          message: "Email already exists",
        });
      }

      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server",
      });
    });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(BAD_REQUEST).send({
      message: "Email and password are required",
    });
  }

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      return res.send({ token });
    })
    .catch((err) => {
      if (err.message === "Incorrect email or password") {
        return res.status(UNAUTHORIZED).send({
  message: "Incorrect email or password",
});
      }

      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server",
      });
    });
};

const updateProfile = (req, res) => {
  const { name, avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, avatar },
    {
      new: true,
      runValidators: true,
    }
  )
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      console.error(err);

      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({
          message: "User not found",
        });
      }

      if (err.name === "ValidationError") {
        return res.status(BAD_REQUEST).send({
          message: "Invalid data",
        });
      }

      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server",
      });
    });
};

module.exports = {
  getCurrentUser,
  createUser,
  login,
  updateProfile,
};
