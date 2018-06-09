var http = require("http");

var PORT = 7000;

function handleRequest(request, response) {
    response.end("It works - path: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("you rock!" + PORT);
})