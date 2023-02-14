const express=require("express");
const app=express();

app.get('/',(req,res)=>{
      res.send("Welcome to Shoaib Akther");
})

app.listen(3000,()=>{
      console.log("Listening this file");
})