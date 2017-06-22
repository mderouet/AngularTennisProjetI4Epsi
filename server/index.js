"use strict";

var http = require('http');
var cors = require('cors');
var socketio = require('socket.io');
var express = require('express');
var app = express();
var port = 3005;

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Origin, Authorization");
    next();
});
    var server = require('http').createServer(app);
    var io = socketio.listen(server, {log:false, origins:'*'});

server.listen(port);
console.log("listening on port : " + port);

app.use("/node_modules", express.static('node_modules'));
app.use(express.static('./src'));

app.options('*', cors());
app.get('*', function(req, res) {
    res.sendfile('./src/index.html')
});

/*
io.origins('*:*');
*/
io.set('origins', '*:*');
io.sockets.on('connection', function(socket){
    socket.on('connect', function(data){
        console.log(data);
    });
    socket.on('sendScore', function(){
        console.log("Demande de mise à jour du score");
        io.sockets.emit('updateScore');
    });
});
