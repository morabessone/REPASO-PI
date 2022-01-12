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
    try {
        const aCharacter = req.body;
        let [newCharacter, ch] = await Character.findOrCreate({
            where: {
                name: aCharacter.name,
                species: aCharacter.species,
                origin: aCharacter.origin,
                image: aCharacter.image,
                created: true,
            }
        })
        // console.log("newCharacter: ", newCharacter);
        // console.log("ch: ", ch);
        await newCharacter.setEpisodes(aCharacter.episode)
        return res.send(newCharacter)
    } catch(e) {
        console.error(e)
    }
}

module.exports = {
    getAllCharacters,
    postCharacter,
}