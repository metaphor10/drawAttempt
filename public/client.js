// connect to the socket server
var socket = io.connect(); 
//console.log('inside client');
// if we get an "info" emit from the socket server then console.log the data we recive
/*socket.on('info', function (data) {
    console.log(data);
});*/
// (1): Send a ping event with 
// some data to the server
console.log( "socket: browser says ping (1)" )
socket.emit('ping', { some: 'data' } );

// (4): When the browser receives a pong event
// console log a message and the events data
socket.on('pong', function (data) {
    console.log( 'socket: browser receives pong (4)', data );
});