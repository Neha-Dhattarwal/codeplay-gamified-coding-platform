import { create } from 'zustand';
import { problemsDatabase } from '../data/problemsDatabase';

interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  xpReward: number;
  testCases: Array<{
    input: string;
    expectedOutput: string;
    isHidden: boolean;
  }>;
  hints: string[];
  constraints: string[];
  examples: Array<{
    input: string;
    output: string;
    explanation: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    cpp: string;
    java: string;
  };
  solved: boolean;
}

interface TestResult {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
}

interface GameState {
  problems: Problem[];
  currentProblem: Problem | null;
  userCode: string;
  isRunning: boolean;
  testResults: TestResult[];
  fetchProblems: () => Promise<void>;
  setProblem: (problem: Problem) => void;
  setUserCode: (code: string) => void;
  runCode: () => Promise<void>;
  submitCode: () => Promise<void>;
}

// Advanced code validation functions
const validateJavaScriptCode = (code: string): boolean => {
  const trimmedCode = code.trim();
  
  // Check if code has meaningful content
  if (trimmedCode.length < 20) return false;
  
  // Check for template comments
  if (trimmedCode.includes('// Your code here') || 
      trimmedCode.includes('// TODO') ||
      trimmedCode.includes('/* Your code here */')) return false;
  
  // Check for basic JavaScript patterns - more lenient
  const hasReturn = /return\s+/.test(trimmedCode);
  const hasLogic = /\b(if|for|while|function|\=\>|\.map|\.filter|\.reduce|\.forEach|Math\.|parseInt|parseFloat)\b/.test(trimmedCode);
  const hasVariables = /\b(let|const|var)\b/.test(trimmedCode) || /\w+\s*[=\+\-\*\/]/.test(trimmedCode);
  const hasArrayAccess = /\[\s*\w+\s*\]/.test(trimmedCode);
  const hasMethodCall = /\w+\.\w+\(/.test(trimmedCode);
  
  // Must have return statement and at least one programming construct
  return hasReturn && (hasLogic || hasVariables || hasArrayAccess || hasMethodCall);
};

const validatePythonCode = (code: string): boolean => {
  const trimmedCode = code.trim();
  
  if (trimmedCode.length < 10) return false;
  
  if (trimmedCode.includes('# Your code here') || 
      trimmedCode.includes('# TODO')) return false;
  
  // Allow 'pass' only if there's other meaningful code
  const hasPassOnly = trimmedCode.trim() === 'pass' || /^\s*pass\s*$/.test(trimmedCode);
  if (hasPassOnly) return false;
  
  const hasLogic = /\b(if|for|while|return|def|len|range|enumerate|zip|map|filter|sum|max|min)\b/.test(trimmedCode);
  const hasReturn = /return\s+/.test(trimmedCode);
  const hasListAccess = /\[\s*\w+\s*\]/.test(trimmedCode);
  const hasMethodCall = /\w+\.\w+\(/.test(trimmedCode);
  
  return hasReturn && (hasLogic || hasListAccess || hasMethodCall);
};

const validateCppCode = (code: string): boolean => {
  const trimmedCode = code.trim();
  
  if (trimmedCode.length < 15) return false;
  
  if (trimmedCode.includes('// Your code here') || 
      trimmedCode.includes('// TODO')) return false;
  
  const hasLogic = /\b(if|for|while|return|vector|string|int|bool|std::)\b/.test(trimmedCode);
  const hasReturn = /return\s+/.test(trimmedCode);
  const hasArrayAccess = /\[\s*\w+\s*\]/.test(trimmedCode);
  const hasMethodCall = /\w+\.\w+\(/.test(trimmedCode);
  
  return hasReturn && (hasLogic || hasArrayAccess || hasMethodCall);
};

const validateJavaCode = (code: string): boolean => {
  const trimmedCode = code.trim();
  
  if (trimmedCode.length < 15) return false;
  
  if (trimmedCode.includes('// Your code here') || 
      trimmedCode.includes('// TODO')) return false;
  
  const hasLogic = /\b(if|for|while|return|int|boolean|String|List|ArrayList|HashMap)\b/.test(trimmedCode);
  const hasReturn = /return\s+/.test(trimmedCode);
  const hasArrayAccess = /\[\s*\w+\s*\]/.test(trimmedCode);
  const hasMethodCall = /\w+\.\w+\(/.test(trimmedCode);
  
  return hasReturn && (hasLogic || hasArrayAccess || hasMethodCall);
};

// Simulate realistic test execution
const executeTestCase = (code: string, language: string, testCase: any, problemId: string): TestResult => {
  // Validate code first
  let isValidCode = false;
  
  switch (language) {
    case 'javascript':
      isValidCode = validateJavaScriptCode(code);
      break;
    case 'python':
      isValidCode = validatePythonCode(code);
      break;
    case 'cpp':
      isValidCode = validateCppCode(code);
      break;
    case 'java':
      isValidCode = validateJavaCode(code);
      break;
    default:
      isValidCode = validateJavaScriptCode(code); // Default to JavaScript validation
  }
  
  if (!isValidCode) {
    return {
      input: testCase.input,
      expected: testCase.expectedOutput,
      actual: 'Code validation failed - please ensure you have a complete solution with return statement',
      passed: false,
    };
  }
  
  // Simulate realistic algorithm checking
  const codeQuality = analyzeCodeQuality(code, problemId);
  const shouldPass = Math.random() < codeQuality;
  
  // For very simple problems, increase success rate
  const isSimpleProblem = problemId.toLowerCase().includes('two sum') || 
                         problemId.toLowerCase().includes('palindrome') ||
                         problemId.toLowerCase().includes('climbing stairs');
  
  const finalSuccessRate = isSimpleProblem ? Math.min(codeQuality + 0.2, 0.98) : codeQuality;
  const finalShouldPass = Math.random() < finalSuccessRate;
  
  return {
    input: testCase.input,
    expected: testCase.expectedOutput,
    actual: finalShouldPass ? testCase.expectedOutput : generateWrongOutput(testCase.expectedOutput),
    passed: finalShouldPass,
  };
};

const analyzeCodeQuality = (code: string, problemId: string): number => {
  let quality = 0.6; // Higher base quality for correct solutions
  
  // Check for problem-specific patterns
  if (problemId.toLowerCase().includes('array') || problemId.toLowerCase().includes('sum')) {
    if (code.includes('for') || code.includes('map') || code.includes('forEach')) quality += 0.2;
    if (code.includes('length') || code.includes('len(')) quality += 0.1;
    if (code.includes('[') && code.includes(']')) quality += 0.1;
  }
  
  if (problemId.toLowerCase().includes('linked') || problemId.toLowerCase().includes('list')) {
    if (code.includes('next') || code.includes('->')) quality += 0.2;
    if (code.includes('while') || code.includes('null')) quality += 0.1;
  }
  
  if (problemId.toLowerCase().includes('tree') || problemId.toLowerCase().includes('binary')) {
    if (code.includes('left') || code.includes('right')) quality += 0.2;
    if (code.includes('root') || code.includes('node')) quality += 0.1;
  }
  
  if (problemId.toLowerCase().includes('string') || problemId.toLowerCase().includes('palindrome')) {
    if (code.includes('charAt') || code.includes('substring') || code.includes('[')) quality += 0.2;
    if (code.includes('length') || code.includes('len(')) quality += 0.1;
  }
  
  if (problemId.toLowerCase().includes('stack') || problemId.toLowerCase().includes('queue')) {
    if (code.includes('push') || code.includes('pop') || code.includes('Stack') || code.includes('Queue')) quality += 0.2;
  }
  
  if (problemId.toLowerCase().includes('graph') || problemId.toLowerCase().includes('island')) {
    if (code.includes('visited') || code.includes('dfs') || code.includes('bfs')) quality += 0.2;
    if (code.includes('queue') || code.includes('stack')) quality += 0.1;
  }
  
  if (problemId.toLowerCase().includes('dynamic') || problemId.toLowerCase().includes('dp')) {
    if (code.includes('dp') || code.includes('memo') || code.includes('cache')) quality += 0.2;
    if (code.includes('for') && code.includes('range')) quality += 0.1;
  }
  
  // General good practices
  if (code.includes('return') && code.split('return').length > 1) quality += 0.1;
  if (code.includes('if') && code.includes('else')) quality += 0.1;
  if (code.length > 50) quality += 0.05; // More detailed solution
  
  // Bonus for common algorithmic patterns
  if (code.includes('Math.max') || code.includes('Math.min')) quality += 0.05;
  if (code.includes('sort') || code.includes('sorted')) quality += 0.05;
  if (code.includes('set') || code.includes('Set') || code.includes('map') || code.includes('Map')) quality += 0.05;
  
  return Math.min(quality, 0.95); // Cap at 95% success rate for very good solutions
};

const generateWrongOutput = (expectedOutput: string): string => {
  // Generate plausible wrong outputs
  if (expectedOutput === 'true') return 'false';
  if (expectedOutput === 'false') return 'true';
  if (/^\d+$/.test(expectedOutput)) {
    const num = parseInt(expectedOutput);
    return String(num + Math.floor(Math.random() * 3) - 1);
  }
  if (expectedOutput.startsWith('[') && expectedOutput.endsWith(']')) {
    return '[]'; // Empty array for wrong array outputs
  }
  return 'Wrong output';
};

export const useGameStore = create<GameState>((set, get) => ({
  problems: [],
  currentProblem: null,
  userCode: '',
  isRunning: false,
  testResults: [],

  fetchProblems: async () => {
    // Load problems from database
    set({ problems: problemsDatabase });
  },

  setProblem: (problem) => {
    set({ 
      currentProblem: problem, 
      userCode: problem.starterCode.javascript, // Default to JavaScript
      testResults: [] 
    });
  },

  setUserCode: (code) => {
    set({ userCode: code });
  },

  runCode: async () => {
    const { currentProblem, userCode } = get();
    if (!currentProblem) return;

    set({ isRunning: true });
    
    try {
      // Only test against visible test cases for "Run"
      const visibleTestCases = currentProblem.testCases.filter(tc => !tc.isHidden);
      
      const results: TestResult[] = visibleTestCases.map(testCase => 
        executeTestCase(userCode, 'javascript', testCase, currentProblem.id)
      );
      
      set({ testResults: results });
    } catch (error) {
      console.error('Code execution failed:', error);
      const results: TestResult[] = currentProblem.testCases
        .filter(tc => !tc.isHidden)
        .map(tc => ({
          input: tc.input,
          expected: tc.expectedOutput,
          actual: 'Runtime Error',
          passed: false,
        }));
      
      set({ testResults: results });
    } finally {
      set({ isRunning: false });
    }
  },

  submitCode: async () => {
    const { currentProblem, userCode } = get();
    if (!currentProblem) return;

    set({ isRunning: true });
    
    try {
      // Test against ALL test cases for submission
      const allTestResults: TestResult[] = currentProblem.testCases.map(testCase => 
        executeTestCase(userCode, 'javascript', testCase, currentProblem.id)
      );

      const allPassed = allTestResults.every(result => result.passed);
      
      if (allPassed) {
        console.log(`🎉 Problem solved! +${currentProblem.xpReward} XP`);
        // Mark problem as solved
        const updatedProblems = get().problems.map(p => 
          p.id === currentProblem.id ? { ...p, solved: true } : p
        );
        set({ problems: updatedProblems });
      } else {
        const failedCount = allTestResults.filter(r => !r.passed).length;
        console.log(`❌ ${failedCount} test case(s) failed. Keep trying!`);
      }

      // Show results for visible test cases only
      const visibleResults = allTestResults.filter((_, index) => 
        !currentProblem.testCases[index].isHidden
      );
      set({ testResults: visibleResults });
      
    } catch (error) {
      console.error('Code submission failed:', error);
    } finally {
      set({ isRunning: false });
    }
  },
}));