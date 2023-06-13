const mongoose=require('mongoose');

const connectDB= () => {
    try{
    mongoose.connect('mongodb://127.0.0.1:27017/helloinfosys',{
    useNewUrlParser:true,   //to avoid Deprecation Warning
    useUnifiedTopology:true,
    });
    console.log("Databse connected successfully");
}
    catch(err){
        console.log("Error");
    };
}

module.exports = connectDB
