const express = require("express");
const router = express.Router();
const { checkAuthUser, checkGuestUser } = require("../config/checkAuth");

router.get("/", checkGuestUser, (req, res) => {});
router.post("/", checkGuestUser, (req, res) => {});
router.get("/home", checkAuthUser, (req, res) => {});

module.exports = router;
