import Order from "../models/order";
import Product from "../models/product";

export const create = async (req, res, next) => {
  let {hash} = req.params;
  let order;
  let product;
  try {
     product = await Product.findOne({hash});
    let orderTmp = {};
    orderTmp.hashProduct = hash;
       let discount=0;

    if (  discountFromTime( new Date(product.createdAt))) {
      discount = 20;
    }
    orderTmp.toPay = (product.price * (100 -discount)) / 100;

    order = await Order.create(orderTmp);

  } catch ({message}) {
    console.log(message);
    next({
      status: 400,
      message
    });
  }
  res.json(order);
};


export const done = async (req, res, next) => {
  let {hash} = req.params;

  try{
    await Order.findOneAndUpdate({hash },{isDone:true});
  } catch ({message}) {
    next({
      status: 400,
      message
    });
  }
  res.json("Done");
};

// createCheck

export const createCheck = async (req, res, next) => {
  let {hash} = req.params;
let check={};
  try{
   let order= await Order.findOne({hash});
   let product=await Product.findOne({hash: order.hashProduct });
   console.log(product);
   check.name=product.name;
   check.toPay=order.toPay;
   check.orderCreatedAt=order.createdAt;
   check.checkCreatedAt=new Date();
  } catch ({message}) {
    next({
      status: 400,
      message
    });
  }
  res.json(check);
};




function discountFromTime(date) {

  const today = new Date();
  const timeDiff = Math.abs(date.getTime() - today.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays >= 31;


}