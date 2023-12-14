import mongoose, { Schema } from 'mongoose';
const ProductSchema=new Schema({
product_id :Number,
product_name: String,
description:String,
price:Number,
category:String,
quantity_in_stock:Number,
image_url:String
});

export const Product=mongoose.model("product",ProductSchema);