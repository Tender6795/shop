import Personal from '../models/personal';
import jwt from 'jsonwebtoken';
 import config from '../config'

export const signup = async (req, res, next) => {
  const credentials = req.body;

  let personal;
  try {
    personal = await Personal.create(credentials);
  } catch ({message}) {

    next({
      status: 400,
      message
    });
  }

  const token=jwt.sign({hash: personal.hash,
                        role:personal.role},config.secret);
  res.json(token);
};

export const signin = async (req, res, next) => {

  const {email, password} = req.body;
  const personal = await Personal.findOne({email});

  if (!personal) {
    return next({
      status: 400,
      message: "User not found"
    });
  }
  const result = await personal.comparePasswords(password);

  if (result === false) {
    return next({
      status: 400,
      message: "Wrong password"
    });
  }

  const token=jwt.sign({_id: personal._id,
    role:personal.role},config.secret);
  res.json(token);
};