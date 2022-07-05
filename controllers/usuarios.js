const {Response} = require('express');



const usuariosGet = (req, res = Response) => {
    res.json({

        
        msg:"peticion GET - controlador",
    })
  }
const usuariosPost = (req, res = Response) => {
    const body = req.body;


    res.json({

        
        msg:"peticion POST - controlador",
        body

    })
  }
const usuariosPut = (req, res = Response) => {
    res.json({

        
        msg:"peticion PUT - controlador",
    })
  }
const usuariosDelete = (req, res = Response) => {
    res.json({

        
        msg:"peticion DELETE - controlador",
    })
  }
const usuariosPatch = (req, res = Response) => {
    res.json({

        
        msg:"peticion PATCH - controlador",
    })
  }

  module.exports = {

    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch

  }