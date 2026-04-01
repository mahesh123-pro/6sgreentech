const express = require('express');
const User = require('../models/User');
const Machinery = require('../models/Machinery');
const Interest = require('../models/Interest');
const ActivityLog = require('../models/ActivityLog');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();

router.use(auth, admin);

router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalLogins = await ActivityLog.countDocuments({ action: 'login' });
    
    const machines = await Machinery.find();
    let totalViews = 0;
    machines.forEach(m => totalViews += m.views);

    res.json({ totalUsers, totalLogins, totalViews });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/popular-machines', async (req, res) => {
  try {
    const popular = await Machinery.find().sort({ views: -1 }).limit(5);
    res.json(popular);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
