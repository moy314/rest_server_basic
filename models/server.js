const express = require('express')
class server{

    constructor(){
        this.app    = express();
        this.port   = process.env.PORT;
        
        //middlewares
        this.middlewares();
        
        //rutas
        this.routes();
    }


    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello World2')
          })
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor corriendo en ${this.port}`);
        });
    }


    middlewares(){
        //sirviendo la carpeta public
        this.app.use(express.static('public'));

    }

}



module.exports = server;