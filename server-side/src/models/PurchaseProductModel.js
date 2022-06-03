const mongoose= require('mongoose');
const DataSchema= mongoose.Schema({
    PurchaseId:{type:Number},
    ProductId:{type:Number},
    Qty:{type:String},
    Cost:{type:String},
    Total:{type:String},
    CreateDate:{type:Date,default:Date.now()}
},{versionKey:false});
const PurchaseProductModel=mongoose.Model('puechasesproducts',DataSchema)
module.exports=PurchaseProductModel;