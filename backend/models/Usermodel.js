const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true   //removes white space
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true}); //time at which id is created will be added automatically

const User=mongoose.model('Users',userSchema);
module.exports=User;