const express = require("express");
const mongoose = require("mongoose");
const { NOT_FOUND } = require("./utils/errors");

const router =
require("./routes/index");

const app = express();

const { PORT = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "6a10ac8afa5c31c66b4aaed9",
  };

  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
