const mongoose= require('mongoose');
const DataSchema= mongoose.Schema({
    Name:{type:String,unique:true},
    SupplierId:{type:Number, default:function(){return Math.floor(Date.now() / 1000)}},
    Address:{type:String},
    Phone:{type:String},
    Email:{type:String},
    CreateDate:{type:Date,default:Date.now()}
},{versionKey:false});
const SupplierModel=mongoose.Model('suppliers',DataSchema)
module.exports=SupplierModel;