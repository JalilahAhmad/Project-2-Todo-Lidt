const Express= require('express');
const app=Express();
const db=require("./DB");
const Todo=require("./todo");
console.log(Todo);

app.get('/',(req,res)=>{

    res.json('Get / is workin')
})

app.listen(500,()=>{
    console.log('Server is workin')
})