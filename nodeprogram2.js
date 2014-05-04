var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
fs.readFile('grid.html','utf8', function (err, data) {
if (err){
response.write('unable to load the requested file');}
else{
response.writeHead(200, {'Content-Type': 'text/html'});
response.write(data);
}
response.end();
});
}).listen(8123);
console.log('Server running at http://localhost:8123/');