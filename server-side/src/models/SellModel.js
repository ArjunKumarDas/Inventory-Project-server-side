const mongoose= require('mongoose');
const DataSchema= mongoose.Schema({
    CustomerId:{type:Number},
    SellId:{type:Number},
    VatTax:{type:String},
    OtherCost:{type:String},
    Discount:{type:String},
    GrandTotal:{type:String},
    Note:{type:String},
    CreateDate:{type:Date,default:Date.now()}
},{versionKey:false});
const SellModel=mongoose.Model('sells',DataSchema)
module.exports=SellModel;