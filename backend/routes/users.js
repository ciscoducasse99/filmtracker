const User = require("../models/User");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwtConfig");

module.exports = (app) => {
  app.post("/register", (req, res, next) => {
    passport.authenticate("register", (err, user, info) => {
      if (err) {
        console.log("Register error: ", err);
      }
      if (info !== undefined) {
        console.log("Info: ", info.message);
        res.send(info.message);
      } else {
        req.logIn(user, (err) => {
          const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
          };
          User.findOne({ email: data.email }).then((user) => {
            user
              .update({
                first_name: data.first_name,
                last_name: data.last_name,
              })
              .then(() => {
                console.log("User created.");
                res.status(200).send({ message: "User created" });
              });
          });
        });
      }
    })(req, res, next);
  });

  app.get("/loginUser", (req, res, next) => {
    passport.authenticate("login", (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info !== undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user, (err) => {
          User.findOne({
            email: user.email,
          }).then((user) => {
            const token = jwt.sign({ email: user.email }, jwtSecret);
            res.status(200).send({
              auth: true,
              token: token,
              message: " User found and logged in",
            });
          });
        });
      }
    })(req, res, next);
  });

  app.get("/find", (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info !== undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        console.log("User found in db from route");
        res.status(200).send({
          auth: true,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password,
          message: "user found",
        });
      }
    })(req, res, next);
  });
};
