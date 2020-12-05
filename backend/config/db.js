const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    console.log(`> MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    // Exits with failure
    process.exit(1);
  }
};

module.exports = connectDb;
