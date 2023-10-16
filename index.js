const express=require('express');
const app=express();
const port=3001;

app.get('/',(req,res)=>{
    // res.send("Hello World");
    res.json({
        "message":"This is a home page"
    })
})

app.get('/users',(req,res)=>{
    res.json({
        "message":"Get all users"
    })
})

app.get('/users/:id',(req,res)=>{
    res.json({
        "message":`Get all users with ID ${req.params.id}`
    })
})

app.post('/users',(req,res)=>{
    res.json({
        "message":"create new user"
    })
})

app.put('/users/:id',(req,res)=>{
    res.json({
        "message":`Update user with its ID ${req.params.id}`
    })
})

app.delete('/users/:id',(req,res)=>{
    res.json({
        "message":"Delete User with ID {req.params.id}"
    })
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})