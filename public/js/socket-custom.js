//

// definir function para cuando se dispare el server nos devuelva inf, o enviar inf
var socket = io();
// los on son para escuchar 
socket.on('connect', function() {
    console.log('conectado al servidor'); // con este savemos cuando nos con4etamos al server
});

socket.on('disconnect', function() { // cod q se  ejecut acuando se pierde la conexion

    console.log('Perdimos conexion con el servidor ');

});

//los emit son para enviar informacion(enviando inf)
socket.emit('EnviarMensaje', {
    user: 'JORMAN',
    mensaje: 'Provando los socket'
        // este resp es el q puse en el callback
}, function(resp) { // esto es un tercer argumento el promero es el evento , 2 el objeto, y este
    console.log('respuesta server', resp);
});

//escuchando la info
socket.on('EnviarMensaje', function(mensaje) {

    console.log('Servidor', mensaje);

});