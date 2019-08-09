import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import bluebird from 'bluebird';

import authRoute from './routes/auth';
import orderRoute from './routes/order';
import productRoute from './routes/product';
import checkRoute from './routes/check';

import config from "./config";
import errorHandler from './middlewares/errorHandler';



const app = express();
mongoose.Promise = bluebird;

mongoose.connect(config.database, {useNewUrlParser: true}, err => {
  if (err) throw err;
  console.log('Mongo connected');
});

const server = app.listen(config.port, err => {
  if (err) throw err;

  console.log(`Server listening on port ${config.port}`);
});

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}));

app.use('/api',authRoute);
app.use('/api',productRoute);
app.use('/api',orderRoute);
app.use('/api',checkRoute);

app.use(errorHandler);



export default server;