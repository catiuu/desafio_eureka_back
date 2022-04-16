const express = require("express");
const { registerCep } = require("./controllers/search");

const routes = express();

routes.get("/search/:zip_code", registerCep);

module.exports = routes;
