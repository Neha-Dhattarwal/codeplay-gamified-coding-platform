import mongoose from 'mongoose';

const testCaseSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true
  },
  expectedOutput: {
    type: String,
    required: true
  },
  isHidden: {
    type: Boolean,
    default: false
  }
});

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  category: {
    type: String,
    required: true
  },
  tags: [String],
  xpReward: {
    type: Number,
    required: true
  },
  testCases: [testCaseSchema],
  hints: [String],
  constraints: String,
  examples: [{
    input: String,
    output: String,
    explanation: String
  }],
  starterCode: {
    javascript: String,
    python: String,
    cpp: String,
    java: String
  },
  stats: {
    totalSubmissions: {
      type: Number,
      default: 0
    },
    acceptedSubmissions: {
      type: Number,
      default: 0
    },
    acceptanceRate: {
      type: Number,
      default: 0
    }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Update acceptance rate when stats change
problemSchema.pre('save', function(next) {
  if (this.stats.totalSubmissions > 0) {
    this.stats.acceptanceRate = (this.stats.acceptedSubmissions / this.stats.totalSubmissions) * 100;
  }
  next();
});

export default mongoose.model('Problem', problemSchema);