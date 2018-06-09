var http = require("http");

var portOne = 7000;

var portTwo = 7500;

function handleRequestOne(request, response) {
    response.end("Port one - It works - path: " + request.url);
}

function handleRequestTwo(request, response) {
    response.end("Port two - it works - path: " + request.url);
}

var serverOne = http.createServer(handleRequestOne);

var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(portOne, function(){
    console.log("you rock!" + portOne);
})

serverTwo.listen(portTwo, function(){
    console.log("study more!" + portTwo);
})