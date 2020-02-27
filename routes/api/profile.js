const express = require("express");
const router = express.Router();
const Profile = require("../../models/profile");
const auth = require("../../middleware/auth");
router.get("/", (req, res) => {
  res.json("Profile routes");
});

router.post("/addProfile", auth, (req, res) => {});
module.exports = router;
