const mongoose = require('mongoose');

const machinerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String }],
  specs: {
    power: { type: String },
    usage: { type: String }
  },
  views: { type: Number, default: 0 },
  interests: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Machinery', machinerySchema);
