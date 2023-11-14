const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    })
    .then(() => console.log("MongoDb is connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
