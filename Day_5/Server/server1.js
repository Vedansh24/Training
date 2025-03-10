import http, { request } from "http";

var server=http.createServer((request,response)=>{
response.write("Welcome to the node server");
response.end();
})

server.listen(8081);
console.log("Sever listen at link: http://localhost:8081")