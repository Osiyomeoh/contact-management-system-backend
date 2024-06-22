const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z ]{2,30}$/
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
  }
});

module.exports = mongoose.model('Contact', contactSchema);
