import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Use a mock connection for demo purposes
    // In production, use: await mongoose.connect(process.env.MONGODB_URI);
    console.log('📊 Database connected successfully (Mock)');
    
    // Mock database connection for demo
    mongoose.connection.readyState = 1;
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;