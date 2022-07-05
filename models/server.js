const express = require('express')
var cors = require('cors')
let rutas = require('../routes/usuarios');
const dbConecction = require('../database/config');
 
class server{
    
    constructor(){
        this.app          = express();
        this.port         = process.env.PORT;
        this.usuariosPath = '/api/users';

        //coneccion a base de datos

        this.conectarDB();

        
        //middlewares
        this.middlewares();
        this.app.use(cors())
        
        //rutas
        this.routes();
    }


    async conectarDB(){

        await dbConecction();
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

        //parseo y lectura del body
        this.app.use(express.json());

    }

}



module.exports = server;