const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const morgan = require("morgan");
const path = require("path");

// Load Config
dotenv.config({ path: "./backend/config/config.env" });
const connectDb = require("./backend/config/db");
const PORT = 5000;

const app = express();
connectDb();

app.use(
  morgan("dev"),
  express.urlencoded({ extended: false }),
  express.json(),
  // passport.initialize(),
  // passport.session(),
  // session({
  //   secret: "stories_secret",
  //   resave: false,
  //   saveUninitialized: false,
  //   // prevents user from being kicked out every time something is reloaded... stores session in MongoDB
  //   store: new MongoStore({ mongooseConnection: mongoose.connection }),
  // }),
  express.static(path.join(__dirname, "frontend/public"))
);
// Routes
// app.use("/", require("./backend/routes/index"));
// app.use("/auth", require("./backend/routes/auth"));
// app.use("/users", require("./backend/routes/users"));
// app.use("/films", require("./backend/routes/films"));

app.listen(PORT, () => {
  console.log("> Server started...");
});
