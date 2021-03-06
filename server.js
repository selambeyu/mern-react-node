const express = require("express");
const app = express();
const connectDB = require("./config/database");
const path = require("path");

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("the app is running");
});

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 6000;

// Main Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

app.listen(port, () => {
  console.log(`The app is running on port  ${port}`);
});
