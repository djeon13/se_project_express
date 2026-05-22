const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/users");
const clothingRoutes = require("./routes/clothingItems");

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

app.use("/users", userRoutes);
app.use("/items", clothingRoutes);


app.use((req, res) => {
  res.status(404).send({
    message: "Requested resource not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});