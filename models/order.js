import mongoose, {Schema} from 'mongoose';
import uuid from 'uuid/v4';
import {ProductSchema} from './product'


const OrderSchema = new Schema({
    hash: {
      type: String,
      unique: 'Hash mast be unique',
    },
    hashProduct: {
      type: String,
      unique: 'Hash mast be unique',
    },
    // name:{
    //   type: String,
    //   lowercase: true,
    //   trim: true,
    // },
    // price:{
    //   type: Number,
    // },
    // discount:{
    //   type: Number,
    //   default:0,
    // },
    toPay:{
      type: Number,
    },
    isDone: {
      type: Boolean,
      default: false,
    },

  },
  {timestamps: true,},
  {_id: false}
);

OrderSchema.pre('save', function (next) {
  if (!this.hash) {
    this.hash = uuid();
  }
  next();
});

export default mongoose.model('order', OrderSchema);