require('dotenv').config();

//servidor:
//importando servidor
const Server = require('./models/server');
const server = new Server();


server.listen();



