import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("home url invoked");
});

router.get("/epuser",(req,res)=>{
    res.send("epuser url invoked");
});

router.get("/cpuser",(req,res)=>{
    res.send("cpuser url invoked");
});

router.get("/view category",(req,res)=>{
    res.send("view category url invoked");
});

router.get("/user register",(req,res)=>{
    res.send("user register url invoked");
});

router.get("/user login",(req,res)=>{
    res.send("user login url invoked");
});



export default router;