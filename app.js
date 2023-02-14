// const express=require("express");
// const app=express();

// app.get('/',(req,res)=>{
//       res.send("Welcome to Shoaib Akther");
// })

// app.listen(3000,()=>{
//       console.log("Listening this file");
// })

// // Get and Post Method
// app.get('/getRequest',(req,res)=>{
//       res.send("Hello this is successfull Get Request")
// })

// app.post('/postRequest',(req,res)=>{
//       res.send('Hello this is successfull Post Request');
// })


// MiddleWere

// const express=require("express");
// const app=express();
// const reqFilter=(reqObject,resObject,next)=>{
//       console.log('reqFilter');
//       next();
// }
// app.use(reqFilter)

// app.get('/',(req,res)=>{
//       res.send("Welcome to Shoaib Akther");
// })
// app.get('/home',(req,res)=>{
//       res.send("Welcome to Shoaib Akther in Home page");
// })

// app.listen(3000,()=>{
//       console.log("Listening this file");
// })



// Error Handling

// const express=require('express');
// const morgan=require('morgan');
// const createError=require('http-errors');
// require(`dotenv`).config


// const app=express()
// const PORT=process.env.PROT||3000

// app.listen(PORT,()=>{
//       console.log(`Server is runnnig on port ${PORT}`)
// })


// const app=require('express')()
// const PORT=3000;

// app.listen(PORT,()=>{
//       console.log(`Its running on  http://localhost:${PORT}`)
// })



// User Registration Project

const express=require('express');
const port=process.env.PORT || 3000

const app=express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));


app.get('/form',(req,res)=>{
      res.sendFile(__dirname+'/public/index.html')
})
app.post('/formPost',(req,res)=>{
      console.log(req.body)
})

app.listen(port,()=>{
      console.log(`Server started at http://localhost:${port}`)
})