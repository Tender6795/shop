import Order from "../models/order";

export const create=async (req,res,next)=>{
  const orderTmp=req.body;
  let order;
  try{
    order=await Order.create(orderTmp);
  }catch ({message}) {
    console.log(message);
    next({
      status: 400,
      message
    });
  }
  res.json(order);
};