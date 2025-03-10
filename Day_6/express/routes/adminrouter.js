import express from "express";
import url from "url";

const router = express.Router();

router.get("/adminhome",(req,res)=>{
    res.send("home url invoked");
});

router.get("/managuser",(req,res)=>{
    var userDetail=url.parse(req.url,true).query;
    console.log("userName = "+userDetail.userName);
    console.log("userName = "+userDetail.userName);
    res.status(200).send("managuser url invoked");
});

router.get("/cpadmin",(req,res)=>{
      var userDetail=url.parse(req.url,true).query;
    console.log("userName = "+userDetail.userName);
    console.log("userName = "+userDetail.userName);
    res.status(200).send("managuser url invoked");
});

router.get("/epadmin",(req,res)=>{
    res.send("epadmin url invoked");
});

router.get("/addcategory",(req,res)=>{
    res.send("addcategory url invoked");
});

router.get("/addsubcategory",(req,res)=>{
    res.send("addsubcategory url invoked");
});

router.get("/addproduct",(req,res)=>{
    res.send("addproduct url invoked");
});



export default router;