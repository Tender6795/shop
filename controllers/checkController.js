import Order from "../models/order";
import Product from "../models/product";
import Check from "../models/check";

export const createCheck = async (req, res, next) => {
  const {_id} = req.params;
  let check;
  let checkTmp = {};
  try {
    let order = await Order.findOne({_id});
    let product = await Product.findOne({hash: order.hashProduct});
    checkTmp.productName = product.name;
    checkTmp.toPay = order.toPay;
    checkTmp.orderCreatedAt = order.createdAt;
    console.dir(checkTmp);
    check = await Check.create(checkTmp);

  } catch ({message}) {
    next({
      status: 400,
      message
    });
  }
  res.json(check);
};
