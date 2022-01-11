const {Episode} = require("../db.js");
const axios = require("axios");

const getEpisodes = async (req, res) => {
    try {
        let episodios = await axios.get("https://rickandmortyapi.com/api/episode")
        let response = episodios.data.results?.map((e) => {
            return {
                id: e.id,
                name: e.name,
            }
        })
        response.forEach(async (e) => {
            await Episode.findOrCreate({
                where: {
                    id: e.id,
                    name: e.name
                }
            })
        })
        return res.send(response)

    } catch(e) {
        console.error(e)
    }
}

module.exports = {
    getEpisodes
}