// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Census = require('./models/Census'); // Import the Census model

// Middleware
app.use(bodyParser.json()); // To parse JSON requests

// Store census records (for now we'll use in-memory storage)
let censusData = [];

// Get all census records
app.get('/census', (req, res) => {
  res.json(censusData);
});

// Get a specific census record by ID
app.get('/census/:id', (req, res) => {
  const census = censusData.find(c => c.id === req.params.id);
  if (!census) {
    return res.status(404).send('Census record not found');
  }
  res.json(census);
});

// Create a new census record
app.post('/census', (req, res) => {
  const { address, city, state, zip, numberOfPeople, year, censusTaker } = req.body;
  
  const newCensus = new Census(address, city, state, zip, numberOfPeople, year, censusTaker);
  
  // Assign a random ID (in a real app, this would be done by the database)
  newCensus.id = Math.random().toString(36).substr(2, 9);
  
  censusData.push(newCensus); // Add to in-memory storage
  res.status(201).send('Census record created!');
});

// Update a census record by ID
app.put('/census/:id', (req, res) => {
  const { address, city, state, zip, numberOfPeople, year, censusTaker } = req.body;
  
  const censusIndex = censusData.findIndex(c => c.id === req.params.id);
  
  if (censusIndex === -1) {
    return res.status(404).send('Census record not found');
  }
  
  const updatedCensus = {
    id: req.params.id,
    address,
    city,
    state,
    zip,
    numberOfPeople,
    year,
    censusTaker
  };
  
  censusData[censusIndex] = updatedCensus; // Update in memory
  res.send('Census record updated!');
});

// Delete a census record by ID
app.delete('/census/:id', (req, res) => {
  const censusIndex = censusData.findIndex(c => c.id === req.params.id);
  
  if (censusIndex === -1) {
    return res.status(404).send('Census record not found');
  }
  
  censusData.splice(censusIndex, 1); // Remove from memory
  res.send('Census record deleted!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
