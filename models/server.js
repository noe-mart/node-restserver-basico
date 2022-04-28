const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT

    this.middlewares()

    this.routes()
  }

  middlewares() {
    // habilitación de CORS
    this.app.use(cors())

    //Lectura y parseo de json
    this.app.use(express.json())

    //Archivos estáticos
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use('/api/usuarios', require('../routes/usuarios'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`app corriendo en localhost:${this.port}`)
    })
  }
}

module.exports = Server
