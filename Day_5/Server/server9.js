// routing + url parsing

import http from 'http';
import url from 'url';
import fs from 'fs';

var server=http.createServer((req,res)=>{

    var urlObj= url.parse(req.url);
    var msg;
    if(urlObj.pathname=="/"|| urlObj.pathname=="/home")
        msg=fs.readFileSync("./views/home.html");
    else if(urlObj.pathname=="/about")
        msg=fs.readFileSync("./views/about.html");
    else if(urlObj.pathname=="/contact")
        msg=fs.readFileSync("./views/contact.html");
    else if(urlObj.pathname=="/services")
        msg=fs.readFileSync("./views/services.html");
    else if(urlObj.pathname=="/register")
        msg=fs.readFileSync("./views/register.html");
    else if(urlObj.pathname=="/login")
        msg=fs.readFileSync("./views/login.html");
    else
        msg="url page not found";

    res.write(msg);
    res.end();

})

server.listen(8081);
console.log('server listen at link : http://localhost:8081');