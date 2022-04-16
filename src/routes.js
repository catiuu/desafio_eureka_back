const express = require("express");
const { registerCep } = require("./controllers/search");


const routes = express();

routes.get("/search", registerCep );


module.exports = routes;