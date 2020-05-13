require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Items = require("./routes/api/items");
const app = express();


app.use(bodyParser.json());
app.use("/api/items", Items);


mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.on("open", () => console.log("Connected to Database!"));





app.listen(process.env.PORT || 5000);














