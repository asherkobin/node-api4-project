require("dotenv").config();

const express = require("express");
const server = express();
const portNum = process.env.PORT || 5000;
const helmet = require("helmet");

server.use(express.json());
server.use(helmet());

server.listen(portNum, () => console.log("Express Listening on Port " + portNum));

server.get("/", (req, res) => {
  res.status(200).json(req.headers);
})
