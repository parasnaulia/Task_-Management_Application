const mongoose = require("mongoose");

(async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://parasnaulia645:nx7w2cQ4pHnjfTbl@cluster0.ivdbulp.mongodb.net/parasnaulia645"
    );
    console.log("Connection is successful");
  } catch (e) {
    console.log("Database Connection error: " + e);
  }
})();
