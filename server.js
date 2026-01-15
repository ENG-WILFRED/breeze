// server.js - The Entry Point
require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(express.json());
app.use(express.static('public'));

// Get all vendors from database
app.get('/api/vendors', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, category FROM vendors LIMIT 10');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Mock Database / Model for orders
const orders = [
  { id: 'ORD-772', customer: 'Sarah J.', item: 'Ahi Tuna Poke', status: 'Preparing', total: 24.50 },
  { id: 'ORD-773', customer: 'Mike R.', item: 'Local Oyster Dozen', status: 'Out for Delivery', total: 38.00 },
];

// Controller Logic
app.get('/api/orders', (req, res) => {
  res.status(200).json(orders);
});

app.post('/api/orders/update', (req, res) => {
  const { id, status } = req.body;
  // In a real app, update DB here
  res.status(200).json({ message: `Order ${id} updated to ${status}` });
});

app.listen(PORT, () => console.log(`Breeze API running on port ${PORT}`));