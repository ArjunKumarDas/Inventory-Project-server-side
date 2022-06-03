const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    Name: {type:String, unique:true},
    CategoryId:{type:Number, default:function(){return Math.floor(Date.now() / 1000)}},
    Createdate:{type:Date, default:Date.now()}
}, {versionKey:false})

const CategoryModel = mongoose.Model('cateories',DataSchema);
module.exports = CategoryModel;