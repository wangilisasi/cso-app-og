const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
        email:{
            type:String
            // required:true
        },
        password:{
            type:String
            // required:true
        }
        // name:{
        //     type:String
        // },
        // token:{
        //     type:String
        // }
         
},{timestamps:true});

module.exports=mongoose.model("User",userSchema);

