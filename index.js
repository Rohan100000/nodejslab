const express = require("express");
const server = express()
const memesList = require("./memeResource")

server.get("/", (request, response) => {
    return response.send("<h2>Hello World</h2>");
});

server.get("/meme", (request, response) => {
    const list = [...memesList];
    const randomIndex = Math.floor(Math.random() * list.length);
    console.log(list[randomIndex]);
    return response.send(`<img src="${list[randomIndex]}"/>`);
});

server.get("/meme/:id", (request, response) => {
    const list = [...memesList];
    const randomIndex = request.params.id;
    console.log(list[randomIndex]);
    return response.send(`<img src="${list[randomIndex]}"/>`);
});

server.listen(3000, () => {
    console.log("Server started on port 3000");
});