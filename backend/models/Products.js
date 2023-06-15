const mongoose=require('mongoose');

const productSchema= new mongoose.Schema({
    name:{
        type:String,

    },
    desc:{
        type:String,
         
    },
    price:{
        type:String,
    }
}); //time at which id is created will be added automatically

const Products=mongoose.model('Products',productSchema);
module.exports=Products;