const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🎉 Hello from OpenShift custom Node.js containers!");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
