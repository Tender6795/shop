import roleCheckHelper from "../helpers/roleCheckHelper";


export default async(req,res,next)=> {
  const token = req.headers['authorization'];
  const role=roleCheckHelper(token,next);
  role.then(val=>{
    if (val ==='cashier') {
      next();
    } else {
      next({
        status: 400,
        message: 'you not cashier'
      })
    }
  });
}