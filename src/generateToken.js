// generateToken.js
import jwt from 'jsonwebtoken';
import 'dotenv/config'; // hoặc require('dotenv').config() nếu dùng CommonJS

const payload = {
  userId: 'abc123',
  username: 'duytran',
  role: 'admin'
};

const token = jwt.sign(payload, process.env.VITE_JWT_SECRET, { expiresIn: '1h' });

console.log('Generated JWT:\n', token);