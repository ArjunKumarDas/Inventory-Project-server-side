const mongoose= require('mongoose');
const DataSchema= mongoose.Schema({
    SupplierId:{type:Number},
    PurchaseId:{type:Number},
    ProductId:{type:Number, default:function(){return Math.floor(Date.now() / 1000)}},
    VatTax:{type:String},
    Discount:{type:String},
    OtherCost:{type:String},
    GrandTotal:{type:String},
    Note:{type:String},
    CreateDate:{type:Date,default:Date.now()}
},{versionKey:false});
const PurchaseModel=mongoose.Model('puechases',DataSchema)
module.exports=PurchaseModel;