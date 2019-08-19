import mongoose, {Schema} from 'mongoose';
import {ProductSchema} from './product'


const OrderSchema = new Schema({

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



export default mongoose.model('order', OrderSchema);