var express = require("express");
var http = require("http");

var app = express();
var server = http.Server(app);
var io = require("socket.io")(server);

server.listen(3333, function() {
    console.log("The server is listening at port 3333");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
    console.log("User has connected");

    socket.on("disconnect", function() {
        console.log("A user has disconnected!");
    });
})