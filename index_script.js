const express = require("express");
const app = express();
const webSocket = require("./socket");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const server = app.listen(3000, () => {
  console.log("listening on *:3000");
});

webSocket(server);
