const mongoose = require('mongoose');

const dbConecction = async ()=>{

    try {
        
        await mongoose.connect(process.env.MONGODB_CNN);

        console.log("base de datos conectada");
        
    } catch (error) {
        
        throw new Error('Error al conectar a la base de datos');
    }

}


module.exports = dbConecction;