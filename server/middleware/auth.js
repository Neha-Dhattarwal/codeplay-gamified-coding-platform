import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Access token required' });
    }

    // Mock JWT verification for demo
    const decoded = { userId: 'mock-user-id', email: 'demo@example.com' };
    
    // In production, use:
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    // Mock admin check for demo
    const isAdminUser = req.user.email === 'admin@demo.com';
    
    if (!isAdminUser) {
      return res.status(403).json({ message: 'Admin access required' });
    }
    
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};