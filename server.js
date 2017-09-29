
var express = require('express');
var socket = require('socket.io');

var app = express();
var io = socket(server);
var server = app.listen(3000);
var io = socket(server);

app.use(express.static('public'));

console.log("My server is running.");
io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log("New connection" + socket.id);
  socket.on('mouse', mouseMessage);

  function mouseMessage(data){
    socket.broadcast.emit('mouse', data);
  }
}
