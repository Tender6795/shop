import mongoose, {Schema} from 'mongoose';
import uuid from 'uuid/v4';


const CheckSchema = new Schema({

    hash: {
      type: String,
      unique: 'Hash mast be unique',
    },
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

CheckSchema.pre('save', function (next) {
  if (!this.hash) {
    this.hash = uuid();
  }
  next();
});

export default mongoose.model('check', CheckSchema);