const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {});

router.get("/", (req, res) => {
  res.send("Users route");
});

module.exports = router;
