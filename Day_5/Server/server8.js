import http from 'http';
import url from 'url';
import fs  from 'fs';

var server=http.createServer((request,response)=>{
   try {
       var content=fs.readFileSync("./views/demo.html");
       response.write(content);
   } catch (err) {
       response.writeHead(500, {'Content-Type': 'text/plain'});
       response.write('Internal Server Error');
   }
   response.end();
})

server.listen(8081);
console.log("Server listen at link: http://localhost:8081");
