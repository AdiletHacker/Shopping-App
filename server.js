
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Items = require("./routes/api/items");
const app = express();


app.use(express.json());
app.use("/api/items", Items);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(__dirname, "client", "build", "index.html");
    });
}


mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.on("open", () => console.log("Connected to Database!"));





app.listen(process.env.PORT || 5000);














