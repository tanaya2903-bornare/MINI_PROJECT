// import express from 'express';
// import mongoose from 'mongoose';

// import {Product} from "./ProductModule.js";

// const app= express();
// app.use(express.json())




// const connectdb=async ()=>{
//     try{
//     await mongoose.connect('mongodb://127.0.0.1:27017/mini_project')
//     .then(() => console.log('Connected!'));
//     }
//     catch(error){
//         console.log(error);
        
//     }
// }



import express from 'express';
import mongoose from 'mongoose';

import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, STUDENT_NOT_FOUND, UPDATE_SUCCESS } from './constants.js';
import {StatusCodes} from 'http-status-codes';
import cors from 'cors';
import { Admin } from './AdminModel.js';
import { Customer } from './customerModel.js';
import { Product } from './ProductModule.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


function verifyToken(request,response,next){
    const header=request.get('Authorization');
    if (header) {
        const token=header.split(" ")[1];
        jwt.verify(token,"secret1234",(error,payload)=>{
            if (error) {
                response.status(StatusCodes.UNAUTHORIZED).send({message:"Invalid token"});
            }
            else{
                next();
            }
        });
    } else {
        response.status(StatusCodes.UNAUTHORIZED).send({message:"Please login first"});
    }
    
}

const app=express();
app.use(cors());
app.use(express.json());

const connectdb=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mini_project');
        console.log("Database connection created !")
    } catch (error) {
        console.log(error);
    }
}
//Cutieeeee
//Admin API's
app.post("/admin",async (request,response)=>{
    try {
        const reqData=request.body;
        reqData['password']=bcrypt.hashSync(reqData.password,10);
        const admin=new Admin(reqData);
        await admin.save();
        response.status(StatusCodes.CREATED).send({message:INSERT_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.post("/admin/login",async(request,response)=>{
    try {
        const admin=await Admin.findOne({phone:request.body.phone});
        if (admin) {
            if (bcrypt.compareSync(request.body.password,admin.password)) {
                const token=jwt.sign({adminPhone:admin.phone},"secret1234");
                response.status(StatusCodes.OK).send({message:"Login successful", token:token});
            }
            else{
                response.status(StatusCodes.BAD_REQUEST).send({message:"Invalid phone or password"});
            }
        }
        else{
            response.status(StatusCodes.BAD_REQUEST).send({message:"Invalid phone or password"});
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

//Product's API
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





app.get('/Product',async(request,response)=>
{
    try 
    {
    const products =await Product.find();
    response.send({products:products});
    } catch (error) {
        console.log(error);
        response.send({msg:"Something went Wrong"});
    }
})


app.get("/Product/:product_id", async (request, response) => {
  try {
    const data = await Product.findOne({
      product_id: request.params.product_id,
    });
    if (data == null) {
      response.send({ message: "product not found!!!!" });
    } else {
      response.send({ data: data });
    }
  } catch (error) {
    response.send("something went wrong !!");
  }
});

app.put("/Product/:product_id", async (request, response) => {
  try {
    await Product.updateOne(
      { product_id: request.params.product_id },
      request.body
    );
    response.send({ message: "Updated Successfully!!!" });
  } catch (error) {
    response.send("something went wrong !!");
  }
});

app.delete("/product/:product_id", async (request, response) => {
  try {
    await Product.deleteOne({ product_id: request.params.product_id });
    response.send({ message: "Deleted successfully!!!" });
  } catch (error) {
    response.send({ message: "something went wrong!!" });
  }
});

// Customer API's
app.post("/customer", verifyToken,async (request, response) => {
    try {
      const data = request.body;
      const customer = new Customer(data);
      //console.log(customer);
      await customer.save();
      response.send({ message: "customer added successfully!!!" });
    } catch (error) {
      response.send({ message: "Something went wrong" });
    }
  });
  
  app.get("/customer",verifyToken, async (request, response) => {
    try {
      const data = await Customer.find();
      response.send({ data: data });
    } catch (error) {
      response.send({ message: "something went wrong!!" });
    }
  });
  
  app.get("/customer/:customer_id" ,verifyToken, async (request, response) => {
    try {
      const data = await Customer.findOne({
        customer_id: request.params.customer_id,
      });
      if (data == null) {
        response.send({ message: "customer not found!!!!" });
      } else {
        response.send({ customer: data });
      }
    } catch (error) {
      response.send("something went wrong !!");
    }
  });
  
  app.put("/customer/:customer_id",verifyToken, async (request, response) => {
    try {
      await Customer.updateOne(
        { customer_id: request.params.customer_id },
        request.body
      );
      response.send({ message: "Updated Successfully!!!" });
    } catch (error) {
      response.send("something went wrong !!");
    }
  });
  
  app.delete("/customer/:customer_id",verifyToken,async (request, response) => {
    try {
      await Customer.deleteOne({ customer_id: request.params.customer_id });
      response.send({ message: "Deleted successfully!!!" });
    } catch (error) {
      response.send({ message: "something went wrong!!" });
    }
  });


  //Order API's

  app.post('/orders',async(request,response)=>
  {
      try {
          const data =request.body;
      const orders1=new Order(data);
      await orders1.save();
      response.send({msg:"Sucess"});
      } catch (error) {
          response.send({msg:"Something went Wrong"});
      }
  })
  
  app.get('/orders',async(request,response)=>
  {
      try 
      {
      const data =await Order.find();
      response.send({msg:data});
      } catch (error) {
          console.log(error);
          response.send({msg:"Something went Wrong"});
      }
  })
  
  app.get('/orders/:order_id',async(request,response)=>
  {
      try 
      {
          const data =await Order.findOne({order_id:request.params.order_id});
          if (data==null) 
          {
              response.send({msg:"Aag Nahi Lagli..!!"});
          } else 
          {
              response.send({msg:data});
          }
          response.send({msg:data});
  
      } catch (error) 
      {
          console.log(error);
          response.send({msg:"Something went Wrong"});
      }
  })
  
  app.put('/orders/:order_id',async(request,response)=>
  {
      try 
      {
          const data =await Order.updateOne({order_id:request.params.order_id},request.body);
      
          response.send({msg:"Updated Sucessfully"});
  
      } catch (error) 
      {
          console.log(error);
          response.send({msg:"Something went Wrong"});
      }
  })
  
  app.delete('/orders/:order_id',async(request,response)=>
  {
      try 
      {
          const data =await Order.deleteOne({order_id:request.params.order_id});
      
          response.send({msg:"Deleted Sucessfully"});
  
      } catch (error) 
      {
          console.log(error);
          response.send({msg:"Something went Wrong"});
      }
  })
  


  //Cart API's

  app.get('/api/cart', async (request, response) => {
    try {
      const cartItems = await CartItem.find();
      response.json(cartItems);
    } catch (error) {
      response.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.post('/api/cart', async (request, response) => {
    try {
      const newItem = new CartItem({ name: request.body.name });
      await newItem.save();
      response.json(newItem);
    } catch (error) {
      response.status(500).json({ error: 'Internal Server Error' });
    }
  });














app.listen(6749, () => {
    console.log("Server has started!!")
    connectdb();
});