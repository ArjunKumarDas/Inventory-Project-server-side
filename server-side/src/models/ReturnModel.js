const mongoose= require('mongoose');
const DataSchema= mongoose.Schema({
    CustomerId:{type:Number},
    ReturnId:{type:Number},
    ReturnCharges:{type:String},
    GrandTotal:{type:String},
    Note:{type:String},
    CreateDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ReturnModel=mongoose.Model('returns',DataSchema)
module.exports=ReturnModel;