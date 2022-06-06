const UserModel =require('../models/UsersModel');
let jwt = require('jsonwebtoken');


exports.CreateUser=(req,res)=>{
    let reqBody=req.body;
    UserModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.UpdateUser=(req,res)=>{
    let UserId= req.params.UserId;
    let Query = {UserId:UserId};
    let reqBody=req.body;
    UserModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })

}



exports.ReadUser=(req,res)=>{

    UserModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })

}

exports.DeleUser=(req,res)=>{
    let UserId= req.params.UserId;
    let Query = {UserId:UserId};
    UserModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })

}

exports.UserLogin(req,res)=>{
    let UserName= req.body['UserName'];
    let Password= req.body['Password']

    UserModel.find({UserName:UserName,Password:Password}, (err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            if(data.length>0){
                // Create Auth Token
                let Playload= {exp: Math.floor(Date.now()/1000) + (24*60*60), data:data[0]}
                let token = jwt.sign(Playload, '')
                res.status(200).json({status:"success", token:token, data:[0]})
            }
            else{
                res.status(401).json({status:"unauthorize"})
            }
        }
    })
}