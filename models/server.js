const express = require('express')
var cors = require('cors')
let rutas = require('../routes/usuarios');
 
class server{
    
    constructor(){
        this.app          = express();
        this.port         = process.env.PORT;
        this.usuariosPath = '/api/users';
        
        //middlewares
        this.middlewares();
        this.app.use(cors())
        
        //rutas
        this.routes();
    }


    routes(){
        
        this.app.use(this.usuariosPath,rutas)
         
        }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor corriendo en ${this.port}`);
        });
    }


    middlewares(){
        this.app.use(cors());
        //sirviendo la carpeta public
        this.app.use(express.static('public'));

    }

}



module.exports = server;