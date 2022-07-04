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
        this.app.get('/api', (req, res) => {
            res.json({

                ok:true,
                msg:"peticion get",
            })
          })
        this.app.put('/api', (req, res) => {
            res.json({

                ok:true,
                msg:"peticion PUT",
            })
          })
        this.app.post('/api', (req, res) => {
            res.json({

                ok:true,
                msg:"peticion POST",
            })
          })
          this.app.delete('/api', (req, res) => {
            res.json({
              
              ok:true,
                msg:"peticion DELETE",
            })
          })
          this.app.patch('/api', (req, res) => {
            res.json({
              
              ok:true,
                msg:"peticion PATCH",
            })
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