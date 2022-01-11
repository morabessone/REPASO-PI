const server = require('./src/app.js')
const { getEpisodes } = require('./src/controllers/episodeControllers.js')
const { conn } = require('./src/db.js')

// Syncing all the models at once.

// Para la precarga cuando se levanta el server, ejecutar la funcion getEpisodes(). Al ser una peticion vamos a usar async await.

conn.sync({ force: true }).then( async () => {
  server.listen(3001, () => {
    console.log('Listening at 3001') // eslint-disable-line no-console
  })
  await getEpisodes();
})