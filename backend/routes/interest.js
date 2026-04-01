const express = require('express');
const Interest = require('../models/Interest');
const Machinery = require('../models/Machinery');
const ActivityLog = require('../models/ActivityLog');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const { machineryId } = req.body;
    const existingInterest = await Interest.findOne({ userId: req.user.id, machineryId });
    if (existingInterest) {
      return res.status(400).json({ message: 'Interest already expressed' });
    }

    const interest = new Interest({ userId: req.user.id, machineryId });
    await interest.save();

    const machine = await Machinery.findById(machineryId);
    if (machine) {
      machine.interests += 1;
      await machine.save();
    }

    await ActivityLog.create({ userId: req.user.id, action: 'interest', details: { machineryId } });

    res.json(interest);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
