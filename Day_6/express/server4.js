//url routing in express

import express from 'express';
import url from 'url';

const app = express();

app.get('/', (req, res) => 
    {
  res.send("*/or /home page invoked");})

             app.get('/services', (req, res) => 
            {
              res.send("*services page invoked with get methods");  })

            app.post('/services', (req, res) => 
              {
              res.send("*services page invoked with post methods");  })

    app.get('/content', (req, res) => 
        {
        res.send("*content page invoked"); })
        
        app.get('/login', (req, res) => {
            url.userDetail=url.parse(req.url, true).query;
            console.log("User Name: "+url.userDetail.name);
            console.log("User Age: "+url.userDetail.age);
          res.send("*/login page invoked");})    ;





app.listen(3000);
console.log("Server listen at link: http://localhost:3000");
//http://localhost:3000/login?username=Vedansh&age=50
