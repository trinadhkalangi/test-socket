const express = require('express');

const app = express();

const http = require('http');

const server = http.createServer(app);

const socket = require('socket.io');

const io = socket(server);



io.on('connection', onConnection);



function onConnection(socket){

 

  socket.on('editor', (data) => socket.broadcast.emit('editor', data));

  socket.on('set_cursor', (cursordata) => socket.broadcast.emit('set_cursor', cursordata));

  socket.on('set_selection', (selectiondata) => socket.broadcast.emit('set_selection', selectiondata));

  console.log(`server is running on port `+ socket)




 

 

}



const port = 80;

server.listen(port, () => console.log(`server is running on port ${port}`));