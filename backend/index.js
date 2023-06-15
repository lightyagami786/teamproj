//installed dependencies
const express=require('express');
const cors=require('cors');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');



//custom made modules
const connectDB= require("./db/config.js")
const User= require("./models/Usermodel.js")
const userRoute= require("./routes/UserRoute.js")
const Products=require("./models/Products.js")


//middleware
const app=express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
//database config
connectDB();
app.use('/users', userRoute)
app.post("/products",async (req,res)=>{
    let product=new Products(req.body);
    let result=await product.save();
    
    res.send({result});
    
});
app.get('/products',async(req,res)=>{
    const products=await Products.find();
    if(products.length>0){
        res.send(products);
    }else{
        res.send({result:'n p f'});
    }
})



app.listen(5000,function(req,res){
    console.log("Server runnpm startning on port 5000");
}) ;