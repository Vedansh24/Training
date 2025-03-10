//Middeleware in express

import express from 'express';


const app = express();

//Application level middleware for all routes
/*app.use("/",(req, res,next) => {
    console.log("Application level middleware invoked");
    next();
  });*/

 /* app.use((req, res,next) => {
    console.log("Application level middleware all route invoked");
    next();
  });*/

  app.use("/services",(req, res,next) => {
    console.log("Application level middleware specfic invoked");
    next();
  });


app.get('/', (req, res) => 
    {
  res.send("*/or /home page invoked");})

    app.get('/services', (req, res) => 
        {
      res.send("*services page invoked with get methods");  })

    app.get('/content', (req, res) => 
        {
        res.send("*content page invoked"); })
    
        app.get('/about', (req, res) =>
            {
            res.send("*about page invoked"); }) 
        
        app.get('/login', (req, res) => {
            url.userDetail=url.parse(req.url, true).query;
            console.log("User Name: "+url.userDetail.name);
            console.log("User Age: "+url.userDetail.age);
          res.send("*/login page invoked");})    ;





app.listen(3000);
console.log("Server listen at link: http://localhost:3000");
//http://localhost:3000/login?username=Vedansh&age=50
