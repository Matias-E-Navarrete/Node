const http = require("http");

http.createServer((request, response)=>{
    response.write('Haga su peticion al servidor.');
    response.end();  
})
.listen('8080');