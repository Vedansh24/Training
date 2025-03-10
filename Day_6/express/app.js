//Route level middleware function


import express from 'express';
import url from 'url';
import path from 'path';
import body

const __dirname = url.fileURLToPath(new URL('.',import.meta.url));

const app = express();

//link router configuration on app.js
import vistorRouter from "./routes/visitorrouter.js";
import userRouter from "./routes/userrouter.js";
import adminRouter from "./routes/adminrouter.js";

//to load the configurations of templeting engine
app.set("view engine","ejs");
app.set("views","./views");

//to load a static content
app.use(express.static(path.join(__dirname,'Public')));

//to load the configuration body parser
app.use(bodyParser.urlencoded({extended:true}));


//application level middle level
app.use("/",vistorRouter);
app.use("/user",userRouter);
app.use("/admin",adminRouter);



    


app.listen(3000);
console.log("Server listen at link: http://localhost:3000");
