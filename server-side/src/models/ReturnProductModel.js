const mongoose= require('mongoose');
const DataSchema= mongoose.Schema({
    ReturnId:{type:Number},
    ProductId:{type:Number},
    Qty:{type:String},
    Cost:{type:String},
    Total:{type:String},
    CreateDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ReturnProductModel=mongoose.Model('returnproducts',DataSchema)
module.exports=ReturnProductModel;