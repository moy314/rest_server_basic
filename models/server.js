const express = require('express')
class server{

    constructor(){
        this.app    = express();
        this.routes();
        this.port   = process.env.PORT;

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

}



module.exports = server;