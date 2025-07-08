import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.js';
import problemRoutes from './routes/problems.js';
import userRoutes from './routes/users.js';
import submissionRoutes from './routes/submissions.js';
import gameRoutes from './routes/games.js';
import { authenticateToken } from './middleware/auth.js';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/problems', authenticateToken, problemRoutes);
app.use('/api/users', authenticateToken, userRoutes);
app.use('/api/submissions', authenticateToken, submissionRoutes);
app.use('/api/games', authenticateToken, gameRoutes);

// Socket.IO for real-time features
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Battle Arena matchmaking
  socket.on('join-battle-queue', (userId) => {
    console.log(`User ${userId} joined battle queue`);
    // Implement matchmaking logic here
    socket.join('battle-queue');
  });

  socket.on('leave-battle-queue', (userId) => {
    console.log(`User ${userId} left battle queue`);
    socket.leave('battle-queue');
  });

  socket.on('battle-answer', (data) => {
    // Handle battle answers and update scores
    socket.to(data.battleId).emit('opponent-answered', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'CodePlay server is running!' });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`🚀 CodePlay server running on port ${PORT}`);
});

export { io };