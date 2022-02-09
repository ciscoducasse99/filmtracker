const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const morgan = require("morgan");
const path = require("path");
const axios = require("axios");

// Load Config
dotenv.config({ path: "./backend/config/config.env" });
const connectDb = require("./backend/config/db");
const { watch } = require("fs");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connectDb();

app.use(
  express.static(path.join(__dirname, "frontend/build")),
  morgan("dev"),
  express.urlencoded({ extended: false }),
  express.json()
  // passport.initialize(),
  // passport.session(),
  // session({
  //   secret: "stories_secret",
  //   resave: false,
  //   saveUninitialized: false,
  //   // prevents user from being kicked out every time something is reloaded... stores session in MongoDB
  //   store: new MongoStore({ mongooseConnection: mongoose.connection }),
  // })
);
// Routes
// app.use("/", require("./backend/routes/index"));
// app.use("/auth", require("./backend/routes/auth"));
// app.use("/users", require("./backend/routes/users"));
app.use("/api/films", require("./backend/routes/films"));

app.listen(PORT, () => {
  console.log("> Server started...");
});
