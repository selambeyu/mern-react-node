const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Profile routes");
});

module.exports = router;
