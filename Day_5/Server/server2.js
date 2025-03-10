//to multiple type of response in node js
// header managment 
 import http from "http";

var server=http.createServer((request,response)=>{
    response.writeHead(200,{"content-type":"text/html"});
    
response.write("Welcome to the node server");
response.end();
})

server.listen(8081);
console.log("Sever listen at link: http://localhost:8081")