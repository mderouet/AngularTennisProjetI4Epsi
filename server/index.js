"use strict";

var http = require('http');
var express = require('express'),

    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);


server.listen(3003);
console.log('ici');

app.use("/node_modules", express.static('node_modules'));
app.use(express.static('./src'))

app.get('*', function(req, res) {
    res.sendfile('./src/index.html')
})

io.sockets.on('connection', function(socket){
    socket.on('send message', function(data){
        io.sockets.emit('new message', data);
    });
});
