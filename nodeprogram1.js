var http = require('http');
http.createServer(function (request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('First node.js example');
}).listen(8123);
console.log('Server running at http://localhost:8123/');