const express = require("express");
const server = express()

server.get("/", (request,response) => {
    return response.send("<h2>Hello World</h2>");
});

server.listen(3000, () =>{
    console.log("Server started on port 3000");
});