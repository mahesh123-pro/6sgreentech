const express = require('express');
const Machinery = require('../models/Machinery');
const ActivityLog = require('../models/ActivityLog');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();

// Get all machinery
router.get('/', async (req, res) => {
  try {
    const filters = {};
    if (req.query.category) filters.category = req.query.category;
    if (req.query.brand) filters.brand = req.query.brand;
    // can add price range filters
    const machines = await Machinery.find(filters).sort({ createdAt: -1 });
    res.json(machines);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a single machinery by ID
router.get('/:id', async (req, res) => {
  try {
    const machine = await Machinery.findById(req.params.id);
    if (!machine) return res.status(404).json({ message: 'Machine not found' });
    
    machine.views += 1;
    await machine.save();
    
    // Log view dynamically if user is logged in
    // const token = req.header('Authorization')?.replace('Bearer ', '');
    // If token passed, decode to get userId and add ActivityLog
    
    res.json(machine);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin routes below
router.post('/', auth, admin, async (req, res) => {
  try {
    const machine = new Machinery(req.body);
    await machine.save();
    res.json(machine);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', auth, admin, async (req, res) => {
  try {
    const machine = await Machinery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(machine);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', auth, admin, async (req, res) => {
  try {
    await Machinery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Machine deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
