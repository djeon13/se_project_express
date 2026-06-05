const express = require("express");
const mongoose = require("mongoose");
const { NOT_FOUND } = require("./utils/errors");
const auth = require("./middlewares/auth");
const router = require("./routes/index");

const app = express();

const { PORT = 3001 } = process.env;
const cors = require("cors");

app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
