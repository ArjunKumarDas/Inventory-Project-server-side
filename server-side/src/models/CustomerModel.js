const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    CustomerName: {type:String, unique:true},
    CustomerId:{type:Number, default:function(){return Math.floor(Date.now() / 1000)}},
    Phone:{type:String},
    Email:{type:String},
    Address:{type:String},
    Createdate:{type:Date, default:Date.now()}
}, {versionKey:false})

const CustomerModel = mongoose.Model('customers',DataSchema);
module.exports = CustomerModel;