//Basic Lib 
const express=require('express');
const router= require('./src/routes/api');
const app= new express();
const bodyParser= require('body-parser');
const path=require('path');


// Secuirty MiddleWare
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

// Database Management
const mongoose = require('mongoose');
app.use(express.static('client/build'));

// Security MidddleWare Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());

// BodyParser Implement
app.use(bodyParser.json());

// Rate Limiter 
const limiter = rateLimit({window:15*60*100,max:3000});

// MongoDB Database Connection
// let URI="mongodb+srv://<username>:<password>@cluster0.nsoms.mongodb.net/CRUD?retryWrites=true&w=majority";
// let OPTION={user:'crud',pass:'7686',autoIndex:true}
// mongoose.connect(URI,OPTION,(error)=>{
//     console.log('connection Success')
//     console.log(error);
// })


//Manage Front-end Routing
app.use("/api/v1",router);


// Add React Front End Routing
// app.get('*',function (req,res) {
//     res.sendFile(path.resolve(__dirname,'client','build','index.html'))
// })

// module.exports=app;