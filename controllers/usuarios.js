const {Response,request} = require('express');



const usuariosGet = (req = request , res = Response) => {
        const {p,q,prueba,name = 'no name'} = req.query;

    res.json({

        
        msg:"peticion GET - controlador",
        q,
        p,
        prueba,
        name
    })
  }
const usuariosPost = (req, res = Response) => {
    const {nombre,edad} = req.body;


    res.json({

        
        msg:"peticion POST - controlador",
        nombre:nombre,
        edad:edad

    })
  }
const usuariosPut = (req, res = Response) => {
    const id = req.params.id;

    res.json({

        
        msg:"peticion PUT - controlador",
        id
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