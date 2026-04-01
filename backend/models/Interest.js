const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  machineryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Machinery', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Interest', interestSchema);
