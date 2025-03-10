//url routing in express

import express from 'express';

const app = express();

app.get('/', (req, res) => 
    {
  res.send("*/or /home page invoked");})

  app.get('/services', (req, res) => 
    {
    res.send("*services page invoked");  })

    app.get('/content', (req, res) => 
        {
        res.send("*content page invoked"); })
        
        app.get('/login', (req, res) => 
            {
          res.send("*/login page invoked");})    ;





app.listen(3000);
console.log("Server listen at link: http://localhost:3000");
