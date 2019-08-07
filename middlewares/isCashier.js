import jwt from 'jsonwebtoken';
import config from '../config'
import Personal from "../models/personal";

export default async(req,res,next)=> {
  const token = req.headers['authorization'];
  if (!token) {
    return next({
      status: 403,
      message: "Forbidden!NO token"
    })
  }
  let personal;
  try {
    var {hash} = jwt.verify(token, config.secret);
    personal = await Personal.findOne({hash}, {password: 0});
  } catch ({message}) {
    return next({
      status: 400,
      message
    })
  }

  if (personal.role==='cashier') {
    next();
  } else {
    next({
      status: 400,
      message: 'you not cashier'
    })

  }
}