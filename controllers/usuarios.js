const {Response,request} = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');



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
const usuariosPost = async(req, res = Response) => {
    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});//usando modelo de usuario
    
    //verificar que existe el correo 

    //encriptar contraseña
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password,salt);



    
    await usuario.save()




    res.json({

        
        msg:"peticion POST - controlador",
        usuario

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