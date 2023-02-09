const fs = require("fs");
const express = require("express");

//Add some data to a file
const heroData = {
    heros: [
        {
            id: 0,
            name: "Ironman",
            catchphrase: "I am Ironman",
            isGood: true
        },
        {
            id: 1,
            name: "Gandalf",
            catchphrase: "You shall not pass",
            isGood: true
        }
    ]
}

fs.writeFile("heros.json", JSON.stringify(heroData), (err) => {
    if (err) console.error(err);
    console.log("Wrote data to the hero file");
});

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
    console.log("Attempting to handle the home GET endpoint");
    res.write("<h1>Home: Hunter's Pad</h1>");
    res.status(200);
    res.end();
});

server.get("/heros", (req, res) => {
    console.log("Attempting to handle the heros GET endpoint");

    fs.readFile("heros.json", (err, data) => {
        if (err) console.error(err);

        res.json(JSON.parse(data));
        res.end();
    });
});

server.post("/echo", (req, res) => {
    console.log("Attempting to handle post");
    const responseBody =
     {body: req.body, url: req.url, method: req.method};

    res.status(200);
    res.json(responseBody);
    //res.write(JSON.stringify(responseBody));
    res.end();
});

server.listen(3000, () => {
    console.log("Server started at localhost:3000");
});