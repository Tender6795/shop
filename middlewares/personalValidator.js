import isEmail from 'validator/lib/isEmail';

export default async(req,res,next)=>{
  const{email,password,role}=req.body;

  if(!email){
    return next({
      status:403,
      message:"Email is required"
    })
  }

if(!isEmail(email)){
  return next({
        status:403,
        message:"Email not valid"
      })
}

  if(!password || password.length===0){
    return next({
      status:403,
      message:"Password is required"
    })
  }

  if(role){
    if(role!=='cashier'||role!=='shop assistant'||role!=='accountant'){
      return next({
        status:403,
        message:"Wrong role"
      })
    }
  }

  next();
}