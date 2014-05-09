var http = require( "http" );
var express = require( "express" );
var expressSession = require ("express-session");
var bodyParser = require( "body-parser" );
var cookieParser = require( "cookie-parser" );
var app = express();
var controllers = require( "./controllers" );
var flash = require( "connect-flash" );

// Setup the View Engine
app.set( "view engine", "jade" );

//Opt into services
app.use( bodyParser() );
app.use(flash());
app.use( cookieParser() );
app.use( expressSession( { secret: "ImmaSecret" }) );
//static resource folder
app.use( express.static( __dirname + "/public" ) );

// Map the routes
controllers.init( app );

app.get( "/api/users", function ( req, res ) {
    res.set( "Content-Type", "application/json" );
    res.send( { name: "Shawn", isValid: true, group: "Admin" });
});

var server = http.createServer( app );

server.listen( 1337 );