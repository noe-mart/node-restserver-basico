const { response } = require('express')

const usuariosGet = (req, res) => {
  const { apiKey } = req.query

  res.json({
    msg: 'get API - controller',
    apiKey
  })
}

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body

  res.json({
    msg: 'post API',
    edad,
    nombre,
  })
}

const usuariosPut = (req, res) => {
  const { id } = req.params

  res.json({
    msg: 'put API',
    id,
  })
}

const usuariosDelete = (req, res) => {
  res.json({
    msg: 'delete API',
  })
}

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
}
