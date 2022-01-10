const { Router } = require("express");
const personajes = require("./characterRouter");
const episodio = require("./episodeRouter");

const router = Router();

// Configurar los routers
router.use("/character", personajes);
router.use("/episode", episodio);

module.exports = router;

// request ---> servidor / index ----> episodios
//                               ----> personajes
