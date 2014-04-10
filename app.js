
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var stylus = require('stylus');
var nib = require('nib');
var app = express();
var counterOfViewers=0;
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(function (req, res, next) {
	res.set('X-Powered-By', 'Flight Tracker');
	next();
});
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.get('/flight/:number', routes.flight);
app.put('/flight/:number/arrived', routes.arrived);
app.get('/list', routes.list);
app.get('/',routes.main1);
app.get('/britelite',routes.britelite);
app.get('/sim',routes.sim);

var server=http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
var io = require('socket.io').listen(server);

// A user connects to the server (opens a socket)
io.sockets.on('connection', function (socket) {

    // (2): The server recieves a ping event
    // from the browser on this socket
    socket.on('ping', function ( data ) {
  
    console.log('socket: server recieves ping (2)');

    // (3): Return a pong event to the browser
    // echoing back the data from the ping event 
    io.sockets.emit( 'pong', data );   

    console.log('socket: server sends pong (3)');

    });
    socket.on( 'drawCircle', function( data, session ) {
    //console.log(data)
    socket.broadcast.emit( 'drawCircle', data );
});
});

