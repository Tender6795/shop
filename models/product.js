import mongoose, {Schema} from 'mongoose';
import uuid from 'uuid/v4';
import uniqueValidator from 'mongoose-unique-validator';
mongoose.plugin(uniqueValidator);
require('mongoose-double')(mongoose);
const SchemaTypes = mongoose.Schema.Types;


const ProductSchema=new Schema({
  hash: {
    type: String,
    unique: 'Hash mast be unique',
  },
  name:{
    type: String,
    unique: 'Product with name "{VALUE}" already exist',
    lowercase: true,
    trim: true,
  },
  price:{
    type: SchemaTypes.Double,
  },
  discount:{
    type: SchemaTypes.Double,
    default:0,
  }
},
  {timestamps: true,},
  { _id : false }
  );

ProductSchema.pre('save', function (next) {
  if (!this.hash) {
    this.hash = uuid();
  }
  next();
});

export default mongoose.model('product', ProductSchema);