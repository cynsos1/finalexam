const express = require('express');
const router = express.Router();
const Census = require('../models/Census');

// CREATE
router.post('/', async (req, res) => {
  try {
    const newEntry = new Census(req.body);
    const saved = await newEntry.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const entries = await Census.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Census.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Census.findByIdAndDelete(req.params.id);
    res.json({ message: 'Record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
