import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
  name: {type : String},
});

const Orders = mongoose.models?.orders || mongoose.model('orders', OrdersSchema);

export {Orders};