import express from 'express';
import mongoose from 'mongoose';

import {Product} from "./ProductModule.js";

const app= express();
app.use(express.json())




const connectdb=async ()=>{
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





app.get('/Product',async(request,response)=>
{
    try 
    {
    const data =await Product.find();
    response.send({msg:data});
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
app.post("/customer", async (request, response) => {
    try {
      const data = request.body;
      const customer = new Customer(data);
      await customer.save();
      response.send({ message: "customer added successfully!!!" });
    } catch (error) {
      response.send({ message: "Something went wrong" });
    }
  });
  
  app.get("/customer", async (request, response) => {
    try {
      const data = await Customer.find();
      response.send({ data: data });
    } catch (error) {
      response.send({ message: "something went wrong!!" });
    }
  });
  
  app.get("/customer/:customer_id", async (request, response) => {
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
  
  app.put("/customer/:customer_id", async (request, response) => {
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
  
  app.delete("/customer/:customer_id", async (request, response) => {
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
  













app.listen(6749, () => {
    console.log("Server has started!!")
    connectdb();
});