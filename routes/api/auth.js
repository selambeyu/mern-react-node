const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Auth route");
});

module.exports = router;
