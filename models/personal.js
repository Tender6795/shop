import mongoose, {Schema} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

var crypto = require('crypto');
mongoose.plugin(uniqueValidator);


const PersonalSchema = new Schema({
  email: {
    type: String,
    unique: 'User with email "{VALUE}" already exist',
    required:'Email is required',
    lowercase: true,
    trim: true,
  },
  role: {
    type: String,
    default: 'cashier',
    lowercase: true,
  },

  password: {
    type: String,
    required: 'Password is required',
    trim: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },

},
  {timestamps: true},);

PersonalSchema.methods.comparePasswords = function (password) {
  const HashPass = crypto.createHash('sha256').update(password).digest('base64');
  return !(this.password !== HashPass);
};


PersonalSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    const password = crypto.createHash('sha256').update(this.password).digest('base64');
    this.password = password;
  }


  next();
});


export default mongoose.model('personal', PersonalSchema);