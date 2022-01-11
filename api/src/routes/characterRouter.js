const { Router } = require("express");
const { getAllCharacters } = require("../controllers/characterControllers");

const characterRouter = Router();

// todas las REQ que llegan a este archivo, es porque comienzan con lo siguiente:
// http:localhost:3001/character

characterRouter.get("/getCharacters", getAllCharacters)

module.exports = characterRouter;
