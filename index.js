const express = require("express");
const app = express();

// This fixes the 404 for the main URL
app.all("/", (req, res) => {
  res.status(200).send("Server is alive!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
