const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mongoose connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/census', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Mongoose model
const Census = require('./models/Census');

// Routes
app.get('/api/census', async (req, res) => {
  try {
    const records = await Census.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/census/:id', async (req, res) => {
  try {
    const record = await Census.findById(req.params.id);
    if (!record) return res.status(404).json({ error: 'Record not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/census', async (req, res) => {
  try {
    const newRecord = new Census(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/census/:id', async (req, res) => {
  try {
    const updated = await Census.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Record not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/census/:id', async (req, res) => {
  try {
    const deleted = await Census.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Record not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
