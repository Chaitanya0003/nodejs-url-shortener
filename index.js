const express = require("express");

const { connectToMongoDb } = require("./connection");

const urlRouter = require("./routes/url");

const app = express();
const PORT = 8001;

//connection
connectToMongoDb("mongodb://localhost:27017/short-url");

//middlewares
app.use(express.json());

//routes
app.use("/", urlRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
