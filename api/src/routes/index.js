const { Router } = require("express");
const characterRoutes = require("./characterRouter");
const characterEpisodes = require("./episodeRouter");

const router = Router();

// Configurar los routers
router.use("/character", characterRoutes);
router.use("/episode", characterEpisodes);

module.exports = router;

// request ---> servidor / index ----> episodios
//                               ----> personajes
