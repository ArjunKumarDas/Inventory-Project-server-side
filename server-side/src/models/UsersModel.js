const mongoose= require('mongoose');
const DataSchema= mongoose.Schema({
    UserName:{type:String,unique:true},
    UserId:{type:Number, default:function(){return Math.floor(Date.now() / 1000)}},
    Password:{type:String},
    Roll:{type:String},
    CreateDate:{type:Date,default:Date.now()}
},{versionKey:false});
const UserModel=mongoose.Model('users',DataSchema)
module.exports=UserModel;