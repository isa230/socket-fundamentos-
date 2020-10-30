//
require('./Config/serve');

const express = require('express');
const socketIO = require('socket.io'); // una pequeña conf ya q los socket no trabajn con app= express inportamos los http
const http = require('http');

const path = require('path');

const app = express();
//2do definir el server para corre la app 
let server = http.createServer(app); // express esta basado en este http son tan parecidas las dor line6 y esta q podemos poner el app dendro de la condicion, de esta manera ya esta montado el server

//Habilitar carpeta public
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));

// IO = esta es la comunicacion con el backend osea el server este va con el de html
module.exports.io = socketIO(server); // esto espar aq pueda funcionar en socket.js
require('./sockets/socket'); // luego lo requiero aqui para q lo ejecule el port



//PORT
// en este caso no llamaremos a app si no a server
server.listen(process.env.PORT, () => {
    console.log('En el puerto', process.env.PORT);
});