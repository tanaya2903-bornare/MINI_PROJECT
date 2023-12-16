import mongoose, { Schema } from "mongoose";
const orderSchema=new Schema(
    {
    order_id:Number,
    customer_id:Number,
    order_date:Date,
    total_amount:Number
});

export const Order=mongoose.model("Orders",orderSchema);