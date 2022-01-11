const {Character, Episode} = require("../db.js");
const axios = require("axios");

const getAllCharacters = async (req, res) => {
    try {
        const api = await axios.get("https://rickandmortyapi.com/api/character")
        const db = await Character.findAll({include: Episode})
        if (api || db ) {
            let apiResponse = api.data.results?.map((ch) => {
                return {
                    name: ch.name,
                    species: ch.species,
                    origin: ch.origin.name,
                    image: ch.image,
                    episode: ch.episode,
                }
            })
            let response = [...apiResponse, ...db]
            res.send(response)
        }
    } catch(e) {
        console.error(e)
    }
}

const postCharacter = async (req, res) => {

}

module.exports = {
    getAllCharacters,
    postCharacter,
}