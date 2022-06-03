const mongoose= require('mongoose');
const DataSchema= mongoose.Schema({
    SellId:{type:Number},
    ProductId:{type:Number},
    Qty:{type:String},
    Cost:{type:String},
    Total:{type:String},
    CreateDate:{type:Date,default:Date.now()}
},{versionKey:false});
const SellProductModel=mongoose.Model('sellproducts',DataSchema)
module.exports=SellProductModel;