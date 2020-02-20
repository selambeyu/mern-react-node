const mongoose=require('mongoose')
const URL='mongodb://127.0.0.1:27017/learn-react';

mongoose.connect(URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true 
});

const db=mongoose.connection;

db.on('error',()=>{
    console.log("Database is not working")
});

db.on('open',()=>{
    console.log("Database Connected");
});

module.exports=db;