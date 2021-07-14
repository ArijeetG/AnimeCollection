require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbInstance = mongoose.connection;
dbInstance.on("error", (err) => console.log(err));
dbInstance.on("open", () => console.log("Connected to db..."));

const app = express();

app.listen(process.env.PORT || 3000, () => console.log("Listening..."));
