const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.write("<h1>Home: Hunter's Pad</h1>");
    res.status(200);
    res.end();
});

server.listen(3000, () => {
    console.log("Server started at localhost:3000");
});