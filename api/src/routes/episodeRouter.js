const { Router } = require("express");
const { getEpisodes } = require("../controllers/episodeControllers");

const episodeRouter = Router();

episodeRouter.get("/getEpisodes", getEpisodes);

module.exports = episodeRouter;
