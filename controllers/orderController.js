import Order from "../models/order";
import Product from "../models/product";

export const create = async (req, res, next) => {
  let {hash} = req.params;
  let order;
  let product;
  try {
    product = await Product.findOne({hash});
    let orderTmp = {};
    orderTmp.name = product.name;
    orderTmp.price = product.price;
    orderTmp.discount=0;

    if (  discountFromTime( new Date(product["createdAt"]))) {
      orderTmp.discount = 20;
    }
    orderTmp.toPay = (product['price'] * (100 -orderTmp.discount)) / 100;

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

function discountFromTime(date) {

  const today = new Date();
  const timeDiff = Math.abs(date.getTime() - today.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays >= 31;


}