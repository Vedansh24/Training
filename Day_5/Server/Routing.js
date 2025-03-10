//url Routing- is machenism in which we transver the control from one page to another page
import http, { request } from 'http';
import { resolve } from 'path';
import url from 'url';

var server=http.createServer((request,resolve)=>{
     
    var urlObj=url.parse(request.url)
    /*resolve.write("hello");*/
    console.log(urlObj);
    var msg;
    if(urlObj.pathname=="/" || urlObj.pathname=="/home")
        msg="/ or /home url invoked";
    else if(urlObj.pathname=="/about")
        msg="about url invoked";
    else if(urlObj.pathname=="/contact")
        msg="contact url invoked";
    else if(urlObj.pathname=="/services")
        msg="servicers url invoked";
    else if(urlObj.pathname=="/register")
        msg="register url invoked";
    else if(urlObj.pathname=="/login")
        msg="login url invoked";
    else
        msg="url page not found";

        resolve.write (msg);
        resolve.end();
})

server.listen(8081);
console.log("Sever listen at link: http://localhost:8081");

