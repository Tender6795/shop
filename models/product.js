import mongoose, {Schema} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
mongoose.plugin(uniqueValidator);

const ProductSchema=new Schema({

  name:{
    type: String,
    unique: 'Product with name "{VALUE}" already exist',
    lowercase: true,
    trim: true,
  },
  price:{
    type: Number,
  },

}, {timestamps: true,});



export default mongoose.model('product', ProductSchema);