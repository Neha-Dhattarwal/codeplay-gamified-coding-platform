import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
    required: true
  },
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true,
    enum: ['javascript', 'python', 'cpp', 'java']
  },
  status: {
    type: String,
    enum: ['Accepted', 'Wrong Answer', 'Time Limit Exceeded', 'Memory Limit Exceeded', 'Runtime Error', 'Compilation Error'],
    required: true
  },
  runtime: Number,
  memory: Number,
  testResults: [{
    testCaseId: String,
    status: String,
    actualOutput: String,
    expectedOutput: String,
    runtime: Number,
    memory: Number
  }],
  xpEarned: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export default mongoose.model('Submission', submissionSchema);