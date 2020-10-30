//
const { io } = require('../app');


//saber cuando el user se conecta al server / este es un objeto
io.on('connection', (client) => {

    console.log('Usuario conectado');
    //emitir un mms para q el cliente lo escuche

    client.emit('EnviarMensaje', { //puede ser cual quier un objeto o un valor boolean, e n este caso lo manejo igual 

        usuario: 'Administrador',
        mensaje: 'Bienveniodo a GuayabaMart',
        dato: 'NO SIRVES PARAR NADA'

    });



    client.on('disconnect', () => {

        console.log('Usuario desconectado ');

    });


    //(escuchar) esta es para enviar mms o escuchar el cliente este se conecta con el emit de html

    client.on('EnviarMensaje', (data, callback) => { // este mms es de l html

        console.log(data);

        client.broadcast.emit('EnviarMensaje', data); // broadcast es para manda rel mismo mms a todas las ventansa


        /* if (mensaje.user) {
             callback({
                 resp: 'TODO SALIO BIEN!'
             });
         } else {
             callback({
                 resp: 'TODO SALIO MAL'
             });
         }

         callback();*/

    });

});