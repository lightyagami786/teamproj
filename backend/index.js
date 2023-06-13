//installed dependencies
const express=require('express');
const cors=require('cors');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');



//custom made modules
const connectDB= require("./db/config.js")
const User= require("./models/Usermodel.js")
const userRoute= require("./routes/UserRoute.js")


//middleware
const app=express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/users', userRoute)
//database config
connectDB();


app.listen(5000,function(req,res){
    console.log("Server runnpm startning on port 5000");
}) ;