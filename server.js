const http = require("http");

const PORT = 7000;

const PORT2 = 7500;

function goodThing(req, res) {

    res.end("You're awesome!")

}

function badThing(req, res) {

    res.end("You suck!!");

}

var server7000 = http.createServer(goodThing);
var server7500 = http.createServer(badThing);

server7000.listen(PORT, function () {

    console.log("This server is listening on http://localhost:" + PORT);


});

server7500.listen(PORT2, function () {

    console.log("This server is listening on http://localhost:" + PORT2);

});