import mongoose, {Schema} from 'mongoose';


const CheckSchema = new Schema({

    productName: {
      type: String,
    },
    orderCreatedAt: {
      type: Date,
    },
    toPay: {
      type: Number,
    },


  },
  {timestamps: true},
);


export default mongoose.model('check', CheckSchema);