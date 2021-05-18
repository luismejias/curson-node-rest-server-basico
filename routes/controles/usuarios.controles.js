const { response } = require('express');

const usuariosGet = (req = request, res = response) => {
  const {q, nombre = " No name", apiKey, page = 1, limit = 10} = req.query;
  res.json({
    "msg": "Get api controlador",
    q,
    nombre,
    apiKey,
    page,
    limit
  });
};

const usuariosPost = (req, res = response) => {
  const {nombre, edad} = req.body;
  res.json({
    "msg": "Post api controlador",
    nombre,
    edad
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    "msg": "Put api controlador",
    id
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    "msg": "Patch api controlador"
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    "msg": "Delete api controlador"
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}