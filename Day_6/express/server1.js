
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Express Server');
});

app.listen(3000);
console.log("Server listen at link: http://localhost:3000");
