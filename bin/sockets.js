/*
*Event listener for SOCKET.IO
*/

var io = require('socket.io')(),
    cnn = 0;
io.sockets.on('connection',function (socket) {
    /******EMIT METHODS*****/

    //Contador de clientes conectados
    cnn++;
    io.sockets.emit('listenCounter', cnn);

    /******LISTEN METHODS*****/

    //Notificacion Masiva
    socket.on('sendAllNotify', function (data) {
       io.sockets.emit('listenAllNotify', data); 
    });

    //Desconexión de Sockets
    socket.on('disconnect', function () {
       console.log(socket.id);
       cnn--;
       io.sockets.emit('listenCounter',cnn); 
    });
});

module.exports = io;
