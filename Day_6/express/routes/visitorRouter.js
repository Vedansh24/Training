import express from "express";
import { render } from "ejs";

const router = express.Router();

router.get("/home",(req,res)=>{
   res.render("home");
});

router.get("/about",(req,res)=>{
    res.render("about");
});

router.get("/contact",(req,res)=>{
    res.render("contact");
});

router.get("/services",(req,res)=>{
    res.render("services");
});

router.get("/register",(req,res)=>{
    res.render("register");
});

router.get("/login",(req,res)=>{
    res.render("login");
});



export default router;