var data = "matt([5,2,6,6,8])";
var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "application/javascript"});
  response.write(data);
  response.end();
});

server.listen(80);

