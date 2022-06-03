const mongoose= require('mongoose');
const DataSchema= mongoose.Schema({
    CatergoryId:{type:Number},
    BrandId:{type:Number},
    ProductId:{type:Number, default:function(){return Math.floor(Date.now() / 1000)}},
    Name:{type:String},
    Price:{type:String},
    Unit:{type:String},
    Details:{type:String},
    CreateDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ProductModel=mongoose.Model('products',DataSchema)
module.exports=ProductModel;