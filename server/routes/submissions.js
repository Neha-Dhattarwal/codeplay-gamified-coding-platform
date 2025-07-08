import express from 'express';
import axios from 'axios';

const router = express.Router();

// Mock Piston API integration
const executeCode = async (code, language, input = '') => {
  try {
    // Mock code execution result
    const mockResult = {
      run: {
        stdout: 'Mock output',
        stderr: '',
        code: 0,
        signal: null
      },
      compile: {
        stdout: '',
        stderr: '',
        code: 0,
        signal: null
      }
    };
    
    // In production, use actual Piston API:
    /*
    const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
      language: language,
      version: '*',
      files: [
        {
          name: 'main',
          content: code
        }
      ],
      stdin: input
    });
    return response.data;
    */
    
    return mockResult;
  } catch (error) {
    console.error('Code execution error:', error);
    throw error;
  }
};

// Submit code for problem
router.post('/submit', async (req, res) => {
  try {
    const { problemId, code, language } = req.body;
    
    // Mock problem data
    const problem = {
      id: problemId,
      testCases: [
        { input: '[2,7,11,15], 9', expectedOutput: '[0,1]', isHidden: false },
        { input: '[3,2,4], 6', expectedOutput: '[1,2]', isHidden: true }
      ],
      xpReward: 10
    };
    
    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    
    const testResults = [];
    let allPassed = true;
    
    // Execute code against test cases
    for (const testCase of problem.testCases) {
      try {
        const result = await executeCode(code, language, testCase.input);
        const passed = result.run.stdout.trim() === testCase.expectedOutput;
        
        if (!passed) allPassed = false;
        
        testResults.push({
          input: testCase.input,
          expectedOutput: testCase.expectedOutput,
          actualOutput: result.run.stdout.trim(),
          passed,
          runtime: 64, // Mock runtime
          memory: 128 // Mock memory usage
        });
      } catch (error) {
        allPassed = false;
        testResults.push({
          input: testCase.input,
          expectedOutput: testCase.expectedOutput,
          actualOutput: 'Runtime Error',
          passed: false,
          error: error.message
        });
      }
    }
    
    const submission = {
      id: Date.now().toString(),
      userId: req.user.userId,
      problemId,
      code,
      language,
      status: allPassed ? 'Accepted' : 'Wrong Answer',
      runtime: 64,
      memory: 128,
      testResults,
      xpEarned: allPassed ? problem.xpReward : 0,
      submittedAt: new Date()
    };
    
    res.json(submission);
  } catch (error) {
    console.error('Submit code error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Run code (test against example cases only)
router.post('/run', async (req, res) => {
  try {
    const { problemId, code, language } = req.body;
    
    // Mock problem data
    const problem = {
      id: problemId,
      testCases: [
        { input: '[2,7,11,15], 9', expectedOutput: '[0,1]', isHidden: false }
      ]
    };
    
    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    
    const testResults = [];
    
    // Only run against visible test cases
    const visibleTestCases = problem.testCases.filter(tc => !tc.isHidden);
    
    for (const testCase of visibleTestCases) {
      try {
        const result = await executeCode(code, language, testCase.input);
        const passed = result.run.stdout.trim() === testCase.expectedOutput;
        
        testResults.push({
          input: testCase.input,
          expectedOutput: testCase.expectedOutput,
          actualOutput: result.run.stdout.trim(),
          passed,
          runtime: 64,
          memory: 128
        });
      } catch (error) {
        testResults.push({
          input: testCase.input,
          expectedOutput: testCase.expectedOutput,
          actualOutput: 'Runtime Error',
          passed: false,
          error: error.message
        });
      }
    }
    
    res.json({ testResults });
  } catch (error) {
    console.error('Run code error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user submissions
router.get('/user/:userId', async (req, res) => {
  try {
    // Mock user submissions
    const submissions = [
      {
        id: '1',
        problemId: '1',
        problemTitle: 'Two Sum',
        status: 'Accepted',
        language: 'javascript',
        runtime: 64,
        memory: 128,
        submittedAt: '2024-01-15T10:30:00Z'
      },
      {
        id: '2',
        problemId: '2',
        problemTitle: 'Palindrome Number',
        status: 'Wrong Answer',
        language: 'python',
        runtime: 48,
        memory: 96,
        submittedAt: '2024-01-14T15:45:00Z'
      }
    ];
    
    res.json(submissions);
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;