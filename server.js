

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();


app.use(express.json());
app.use("/api/items", require("./routes/api/items"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}


mongoose.connect("mongodb+srv://user:UlTWec91AgtUwjFB@cluster0-knb9o.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true", { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.on("open", () => console.log("Connected to Database!"));





app.listen(process.env.PORT || 5000);














