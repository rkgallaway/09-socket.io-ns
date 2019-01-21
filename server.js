'use strict';

const io = require('socket.io')(3000);

let counter = 0;
let letter = 'A';
let num = 0;

//namespaces -use .of
const numbers = io.of('/numbers');
const letters = io.of('/letters');


//rooms -use .in
numbers.on('connection', (socket) =>{
  console.log('joined numbers!');

  socket.on('join', (room, cb) =>{
    socket.join(room);
    cb && cb(`joined ${room}`);
  });

  socket.on('next-number', ()=>{
    socket.broadcast.emit('number', counter);
    socket.in('negative').broadcast.emit('_number', -counter);
    counter++;
  });
});

letters.on('connection', (socket) =>{
  console.log('joined letters!');

  socket.on('join', (room, cb) =>{
    socket.join(room);
    cb && cb(`joined ${room}`);
  });

  socket.on('next-letter', ()=>{
    socket.broadcast.emit('letter', counter);
    socket.in('lowercase').broadcast.emit('letter', letter.toLowerCase());
    if(num > 26){
      num = 0;
    }
    letter = String.fromCharCode(65 + num);
    num++;
  });
});



