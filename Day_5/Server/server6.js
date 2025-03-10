//url Routing- is machenism in which we transver the control from one page to another page
import http, { request } from 'http';
import { resolve } from 'path';
import url from 'url';

var server=http.createServer((request,resolve)=>{
     
    var urlObj=url.parse(request.url,true);
    //resolve.write("hello");
    
    console.log(urlObj);
    var msg;
    if(urlObj.pathname=="/" || urlObj.pathname=="/home")
        msg="/ or /home url invoked";
    else if(urlObj.pathname=="/about")
        msg="about url invoked";
    else if(urlObj.pathname=="/contact")
    {
        if(request.method=="GET")
            msg="/contact url invoked with get method";
        else if(request.method=="POST")
            msg="/contact url invoked with post method";
        else if(request.method=="PUT")
            msg="/contact url invoked with put method";
        else if(request.method=="PATCH")
            msg="/contact url invoked with patch method";
        else if(request.method=="DELETE")
            msg="/contact url invoked with delete method";
        else
        msg="/unkonow method";

    }
        
    else if(urlObj.pathname=="/services")
        msg="servicers url invoked";
    else if(urlObj.pathname=="/register")
        msg="register url invoked";
    else if(urlObj.pathname=="/login")
    {
        msg="login url invoked";
        console.log("username="+urlObj.query.username);
        console.log("password="+urlObj.query.password);
    }    
    else
        msg="url page not found";

        resolve.write (msg);
        resolve.end();
})

server.listen(8081);
console.log("Sever listen at link: http://localhost:8081");

