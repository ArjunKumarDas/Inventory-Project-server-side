const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    Name: {type:String, unique:true},
    BrandId:{type:Number, default:function(){return Math.floor(Date.now() / 1000)}},
    Createdate:{type:Date, default:Date.now()}
}, {versionKey:false})

const BrandModel = mongoose.Model('barnds',DataSchema);
module.exports = BrandModel;