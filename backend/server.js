
var WebSocketServer = require('ws').Server;

const wssPort = process.env.PORT || 8080;
const wss = new WebSocketServer({port: wssPort});
var clients = new Array;

function handleConnection(client, request) {
	console.log("New Connection..."); 
	clients.push(client); 

	function endClient() {
		var position = clients.indexOf(client);
		clients.splice(position, 1);
		console.log("Connection closed...");
	}

	function clientResponse(data) {
		broadcast(`User: ${data}`);
	}

	client.on('message', clientResponse);
	client.on('close', endClient);
}

function broadcast(data) {
	for (c in clients) {
		clients[c].send(JSON.stringify(data));
	}
}

wss.on('connection', handleConnection);