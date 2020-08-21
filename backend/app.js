const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemRoute = require("./src/item/itemRoute");
const orderRoute = require("./src/order/orderRoute");

mongoose
  .connect(
    "mongodb+srv://testing:admin$1@testingcluster.iz1bz.mongodb.net/vending_machine?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const app = express();
const hostname = "127.0.0.1";
const port = 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/items", itemRoute);
app.use("/orders", orderRoute);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
