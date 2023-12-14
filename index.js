import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import {Product} from "./ProductModule.js";

const app= express();
app.use(express.json())




const connectDB=async ()=>{
    try{
    await mongoose.connect('mongodb://127.0.0.1:27017/mini_project')
    .then(() => console.log('Connected!'));
    }
    catch(error){
        console.log(error);
        
    }
}


app.post('/Product',async(request,response)=>{
try{
const data=request.body;
const product1=new Product(data)
await product1.save();
response.send({message:"Products added!!!"})
}catch(error){
    response.send({message:"Something went wrong!!!"})
}
});




