const express=require('express');
const app=express();
const connectDB=require('./config/database')
const path=require('path');

connectDB();

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
  const port=process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`The app is running on port${port}`);
})