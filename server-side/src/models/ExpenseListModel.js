const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    TypeID: {type:Number},
    ExpenseId:{type:Number, default:function(){return Math.floor(Date.now() / 1000)}},
    Amount:{type:Number},
    Note:{type:String},
    Address:{type:String},
    Createdate:{type:Date, default:Date.now()}
}, {versionKey:false})

const ExpenseListModel = mongoose.Model('expenslists',DataSchema);
module.exports = ExpenseListModel;