const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  movieId: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
