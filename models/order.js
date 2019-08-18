import mongoose, {Schema} from 'mongoose';
import uuid from 'uuid/v4';
import {ProductSchema} from './product'


const OrderSchema = new Schema({
    // hash: {
    //   type: String,
    //   unique: 'Hash mast be unique',
    // },
    idProduct: {
      type: String,
    },

    toPay:{
      type: Number,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },

  },
  {timestamps: true,},
);

// OrderSchema.pre('save', function (next) {
//   if (!this.hash) {
//     this.hash = uuid();
//   }
//   next();
// });

export default mongoose.model('order', OrderSchema);