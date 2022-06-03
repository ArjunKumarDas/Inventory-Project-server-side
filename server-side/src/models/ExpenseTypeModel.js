const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    Name: {type:String, unique:true},
    TypeId:{type:Number, default:function(){return Math.floor(Date.now() / 1000)}},
    Amount:{type:Number},
    Note:{type:String},
    Address:{type:String},
    Createdate:{type:Date, default:Date.now()}
}, {versionKey:false})

const ExpenseTypeModel = mongoose.Model('expensetypes',DataSchema);
module.exports = ExpenseTypeModel;