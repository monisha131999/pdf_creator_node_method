const mongoose=require('mongoose');
const dataschema=new mongoose.Schema({
    Name:{
        type:String,
        require:true,
      },
      Gender:{
        type:String,
        require:true,
      },
      Email:{
        type:String,
        require:true,
      },
       Mobile:{
        type:Number,
        require:true,
      },
      DOB:{
        type:Number,
        require:true,
      },
      MaritalStatus:{
        type:String,
        require:true,
      },
      AadharNumber:{
        type:number,
        require:true,
      },
      BloodGroup:{
        type:String,
        require:true,
      },
      

})
module.exports =mongoose.model("get pdf",dataschema)
