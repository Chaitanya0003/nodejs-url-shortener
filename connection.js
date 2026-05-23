const mongoose = require("mongoose");

function connectToMongoDb(url) {
  mongoose.connect(url).then(() => {
    console.log("Connected to MongoDB");
  });
}

module.exports = { connectToMongoDb };
