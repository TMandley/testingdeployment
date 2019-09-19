const mongoose = require('mongoose');
const CakeSchema = new mongoose.Schema({
    baker: { type: String, required: true },
    photo: { type: String, required: true },
    rating: [],
    comments: []
  },
  { timestamps: true }
  );
  // create an object to that contains methods for mongoose to interface with MongoDB
const Cake = mongoose.model('cake', CakeSchema);
module.exports = Cake;

