import Order from "../models/order";
import Product from "../models/product";
import moment from 'moment';

export const create = async (req, res, next) => {
  let {hash} = req.params;
  let order;
  try {
  let  product = await Product.findOne({hash});
    let orderTmp = {};
    orderTmp.hashProduct = hash;
    let discount = 0;

    if (discountFromTime(new Date(product.createdAt))) {
      discount = 20;
    }
    orderTmp.toPay = (product.price * (100 - discount)) / 100;

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

  try {
    await Order.findOneAndUpdate({hash}, {isDone: true});
  } catch ({message}) {
    next({
      status: 400,
      message
    });
  }
  res.json("Done");
};

export const paid = async (req, res, next) => {
  let {hash} = req.params;

  try {
    await Order.findOneAndUpdate({hash}, {isPaid: true});
  } catch ({message}) {
    next({
      status: 400,
      message
    });
  }
  res.json("Done");
};


export const getOrdersByDates = async (req, res, next) => {
  let {date1,date2} = req.params;
  console.log(date1);
  console.log(date2);

  if(moment(date1).isValid() &&
     moment(date2).isValid()){      //validation of date

    let orders=[];

    if((moment(date1).isAfter(date2))){
      orders=await  Order.find({"createdAt": {
          '$gte':date2,
          '$lt':moment(date1).add('days', 1),//including date on what date
        }});
    }
    else if((moment(date2).isAfter(date1))){
    orders=await  Order.find({"createdAt": {
          '$gte':date1,
          '$lt':moment(date2).add('days', 1),
        }});
    }else{
      orders=await  Order.find({"createdAt": {
          '$gte':date1,
          '$lt':moment(date1).add('days', 1),
        }});
    }
// console.dir(orders);
    res.json(orders);
  }
  else{
    next({
      status: 400,
     message:'enter valid dates',
    });
    res.json("InValid");
  }


};



function discountFromTime(date) {

  const today = new Date();
  const timeDiff = Math.abs(date.getTime() - today.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays >= 31;


}