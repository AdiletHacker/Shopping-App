if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
};


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();


app.use(bodyParser.json());
app.use("/api/items", require("./routes/api/items"));

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.on("open", () => console.log("Connected to Database!"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
};




app.listen(process.env.PORT || 5000);














