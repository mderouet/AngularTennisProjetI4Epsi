"use strict";

var http = require('http');
var cors = require('cors');
var socketio = require('socket.io');
var express = require('express')
var app = express();
console.log('avant');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Origin, Authorization");
    next();
});
    console.log("apres");
    var server = require('http').createServer(app);
    var io = socketio.listen(server, {log:false, origins:'*'});

    //var io = require('socket.io').listen(server);
    //io = require('socket.io')(server, { origins: '*:*'});

server.listen(3003);
console.log('Début');


app.use("/node_modules", express.static('node_modules'));
app.use(express.static('./src'));

app.options('*', cors());
app.get('*', function(req, res) {
    res.sendfile('./src/index.html')
})

/*
io.origins('*:*');
*/
io.set('origins', '*:*');
io.sockets.on('connection', function(socket){
    socket.on('connect', function(data){
        console.log(data);
    });
    socket.on('sendMessage', function(){
        console.log("MessageSend");
        io.sockets.emit('newMessage');
    });
});
