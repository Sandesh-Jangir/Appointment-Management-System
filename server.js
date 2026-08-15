const express = require("express");
const db = require("./db/db");
const new_user = require("./src/register.mjs");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Define a basic route
app.get("/", (req, res) => {
  res.json({
    Message: "Hello Bro!",
  });
});

// Creating the user
app.post("/register", async (req, res) => {
  new_user.default(req, res, db);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
