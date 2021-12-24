const Express= require('express');
const app=Express();
const db=require("./DB");
const Todo=require("./todo");
console.log(Todo);

app.use(Express.json())

app.get('/',(req,res)=>{

    res.json('Get / is workin')
})

app.get('/tasks',(req,res)=>{
    Todo.find({},(err,data)=>{
        if(err){ 
            console.log("Error")
        }else{
            res.json(data)
        }       
    })
})



app.post('/tasks',(req,res)=>{
    Todo.create(req.body,(err,newTask)=>{
        if(err){ 
            console.log("Error")
        }else{
         
            res.status(201).json("create new Todo successfully")
        }
        
    })
})


app.listen(5000,()=>{
    console.log('Server is workin')
})