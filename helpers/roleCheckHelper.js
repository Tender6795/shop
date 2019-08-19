import jwt from 'jsonwebtoken';
import config from '../config'
import Personal from "../models/personal";


export default async  (token, next)=> {
  if (!token) {
    return next({
      status: 403,
      message: "Forbidden!NO token"
    })
  }
  try {
    let {_id} = jwt.verify(token, config.secret);
    let personal = await Personal.findOne({_id}, {password: 0});
    if(!personal){
      return next({
        status: 400,
        message:'No such person'
      })
    }
    return personal.role;

  } catch ({message}) {
    return next({
      status: 400,
      message
    })
  }

}


// export default returnRole;