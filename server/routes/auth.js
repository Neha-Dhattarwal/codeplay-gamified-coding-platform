import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';

const router = express.Router();

// Initialize Google OAuth client
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Mock users database for demo
const mockUsers = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@demo.com',
    password: '$2a$10$rQJ8kKz4WvXJGQ9tJjNFoOCELSZYPyOHgJ7TUJWKzfz3VRYLgP5nW', // "password"
    role: 'admin',
    xp: 1500,
    level: 15,
    solvedProblems: ['1', '2'],
    badges: ['First Steps'],
    streak: 5,
    lastLogin: new Date(),
    isPremium: true,
    provider: 'email'
  },
  {
    id: '2',
    username: 'testuser',
    email: 'test@demo.com',
    password: '$2a$10$rQJ8kKz4WvXJGQ9tJjNFoOCELSZYPyOHgJ7TUJWKzfz3VRYLgP5nW', // "password"
    role: 'player',
    xp: 650,
    level: 7,
    solvedProblems: ['1'],
    badges: ['First Steps'],
    streak: 2,
    lastLogin: new Date(),
    isPremium: false,
    provider: 'email'
  }
];

// Verify Google token
async function verifyGoogleToken(token) {
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    return ticket.getPayload();
  } catch (error) {
    throw new Error('Invalid Google token');
  }
}

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email || u.username === username);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: String(mockUsers.length + 1),
      username,
      email,
      password: hashedPassword,
      role: 'player',
      xp: 0,
      level: 1,
      solvedProblems: [],
      badges: [],
      streak: 0,
      lastLogin: new Date(),
      isPremium: false,
      provider: 'email'
    };

    mockUsers.push(newUser);

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      'mock-jwt-secret',
      { expiresIn: '7d' }
    );

    // Return user data without password
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      message: 'User created successfully',
      user: userWithoutPassword,
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Google Register
router.post('/google/register', async (req, res) => {
  try {
    const { credential } = req.body;

    // Verify Google token
    const payload = await verifyGoogleToken(credential);
    
    if (!payload) {
      return res.status(400).json({ message: 'Invalid Google token' });
    }

    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === payload.email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Create new user from Google data
    const newUser = {
      id: `google_${payload.sub}`,
      username: payload.name.replace(/\s+/g, '').toLowerCase(),
      email: payload.email,
      role: 'player',
      xp: 0,
      level: 1,
      solvedProblems: [],
      badges: ['Google User'],
      streak: 0,
      lastLogin: new Date(),
      isPremium: false,
      avatar: payload.picture,
      provider: 'google',
      googleId: payload.sub
    };

    mockUsers.push(newUser);

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      'mock-jwt-secret',
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
      token
    });
  } catch (error) {
    console.error('Google registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Update last login
    user.lastLogin = new Date();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'mock-jwt-secret',
      { expiresIn: '7d' }
    );

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Login successful',
      user: userWithoutPassword,
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Google Login
router.post('/google', async (req, res) => {
  try {
    const { credential } = req.body;

    // Verify Google token
    const payload = await verifyGoogleToken(credential);
    
    if (!payload) {
      return res.status(400).json({ message: 'Invalid Google token' });
    }

    // Find existing user or create new one
    let user = mockUsers.find(u => u.email === payload.email);
    
    if (!user) {
      // Create new user from Google data
      user = {
        id: `google_${payload.sub}`,
        username: payload.name.replace(/\s+/g, '').toLowerCase(),
        email: payload.email,
        role: 'player',
        xp: 0,
        level: 1,
        solvedProblems: [],
        badges: ['Google User'],
        streak: 0,
        lastLogin: new Date(),
        isPremium: false,
        avatar: payload.picture,
        provider: 'google',
        googleId: payload.sub
      };
      
      mockUsers.push(user);
    } else {
      // Update last login
      user.lastLogin = new Date();
      
      // Update avatar if it's a Google user
      if (user.provider === 'google') {
        user.avatar = payload.picture;
      }
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'mock-jwt-secret',
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      user,
      token
    });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get current user
router.get('/me', async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Access token required' });
    }

    // Mock token verification
    const user = mockUsers.find(u => u.email === 'admin@demo.com'); // Default to admin for demo
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { password: _, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;