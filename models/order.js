import mongoose, {Schema} from 'mongoose';
import uuid from 'uuid/v4';
import {ProductSchema} from './product'


const OrderSchema = new Schema({
    hash: {
      type: String,
      unique: 'Hash mast be unique',
    },
   product:{
     type:[ProductSchema],
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