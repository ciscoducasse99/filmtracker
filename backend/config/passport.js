const bcrypt = require("bcrypt");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/User");
import jwtSecret from "./jwtConfig";

const SALT_ROUNDS = 12;

passport.use(
  "register",
  new localStrategy(
    {
      first_name: "first_name",
      last_name: "last_name",
      email: "email",
      password: "password",
      session: false,
    },
    (email, password, first_name, last_name, done) => {
      try {
        User.findOne({
          email: email,
        }).then((user) => {
          if (user != null) {
            console.log("Email is already taken...");
            return done(null, false, {
              message: "Email already taken. Try another one.",
            });
          } else {
            bcrypt.hash(password, SALT_ROUNDS).then((hashedPassword) => {
              User.create({
                email,
                password: hashedPassword,
                first_name,
                last_name,
              }).then((user) => {
                console.log("User created...");
                return done(null, user);
              });
            });
          }
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      email: "email",
      password: password,
      session: false,
    },
    (email, password, done) => {
      try {
        User.findOne({
          email: email,
        }).then((user) => {
          if (user === null) {
            return done(null, false, { message: "Invalid email. Try again." });
          } else {
            bcrypt.compare(password, user.password).then((res) => {
              if (res !== true) {
                console.log("Password didnt match.");
                return done(null, false, {
                  message: `Password didn't match. Try again.`,
                });
              }
              console.log("Auth complete");
              return done(null, user);
            });
          }
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: jwtSecret.secret,
};

// Auth called on protected routes
passport.use(
  "jwt",
  new JWTStrategy(jwtOpts, (jwt_payload, done) => {
    try {
      User.findOne({
        email: jwt_payload.email,
      }).then((user) => {
        if (user) {
          console.log("User found in DB in passport");
          done(null, user);
        } else {
          console.log("User not found.");
          done(null, false);
        }
      });
    } catch (error) {
      done(error);
    }
  })
);
