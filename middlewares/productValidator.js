import isDecimal from 'validator/lib/isDecimal';
export default async(req,res,next)=>{
  const{name,price}=req.body;
  if(!name ||name.length===0){
    return next({
      status:403,
      message:"Wrong product name"
    })
  }
  if(!price ||price<0 ||!isDecimal(price)){
    return next({
      status:403,
      message:"Wrong price"
    })
  }
  next();
}