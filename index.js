const express = require("express");
const path = require("path");

const { connectToMongoDb } = require("./connection");

const URL = require("./models/url");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");

const app = express();
const PORT = 8001;

//connection
connectToMongoDb("mongodb://localhost:27017/short-url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/url", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
