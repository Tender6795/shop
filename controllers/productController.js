import Product from "../models/product";

export const create=async (req,res,next)=>{
  const productTmp=req.body;
  let product;
  try{
    product=await Product.create(productTmp);
  }catch ({message}) {
    console.log(message);
    next({
      status: 400,
      message
    });
  }
  res.json(product);
};

export const update=async (req,res,next)=>{

  let {hash} = req.params;
  try{
    const productTmp=req.body;
    await Product.findOneAndUpdate({hash: hash },productTmp);
  } catch ({message}) {
    next({
      status: 400,
      message
    });
  }
  res.json("Done");
};

export const deleteProduct=async (req,res,next)=>{
  let product;
  try{
    product=await Product.findOneAndRemove({hash: req.params.hash});
  } catch ({message}) {
    next({
      status: 400,
      message
    });
  }
  res.json(product);
};