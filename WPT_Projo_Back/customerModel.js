import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema({
  customer_id: Number,
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  address: {
    street1: String,
    street2: String,
    city: String,
    state: String,
    zipcode: Number,
  },
});

export const Customer = mongoose.model("customer", customerSchema);
