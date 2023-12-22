const mongoose = require('mongoose');
const plm= require('passport-local-mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pintrestuser')
// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],
  dp: {
    type: String // You can specify any appropriate type for the display picture (e.g., String for storing image URLs)
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  }
});

userSchema.plugin(plm);

// Create a User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
