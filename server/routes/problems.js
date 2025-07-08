import express from 'express';

const router = express.Router();

// Mock problems data
const mockProblems = [
  {
    id: '1',
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    difficulty: 'Easy',
    category: 'Array',
    xpReward: 10,
    testCases: [
      { input: '[2,7,11,15], 9', expectedOutput: '[0,1]', isHidden: false },
      { input: '[3,2,4], 6', expectedOutput: '[1,2]', isHidden: true },
      { input: '[3,3], 6', expectedOutput: '[0,1]', isHidden: true },
    ],
    hints: [
      'Use a hash map to store complements',
      'Check if target - num exists in the map',
      'Return indices when complement is found'
    ],
    solved: false,
  },
  {
    id: '2',
    title: 'Palindrome Number',
    description: 'Given an integer x, return true if x is palindrome integer.',
    difficulty: 'Easy',
    category: 'Math',
    xpReward: 10,
    testCases: [
      { input: '121', expectedOutput: 'true', isHidden: false },
      { input: '-121', expectedOutput: 'false', isHidden: false },
      { input: '10', expectedOutput: 'false', isHidden: true },
    ],
    hints: [
      'Convert to string and reverse',
      'Or reverse the number mathematically',
      'Handle negative numbers carefully'
    ],
    solved: false,
  },
  {
    id: '3',
    title: 'Merge Two Sorted Lists',
    description: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a sorted order.',
    difficulty: 'Easy',
    category: 'Linked List',
    xpReward: 15,
    testCases: [
      { input: '[1,2,4], [1,3,4]', expectedOutput: '[1,1,2,3,4,4]', isHidden: false },
      { input: '[], []', expectedOutput: '[]', isHidden: false },
      { input: '[], [0]', expectedOutput: '[0]', isHidden: true },
    ],
    hints: [
      'Use two pointers approach',
      'Compare values and merge in order',
      'Handle edge cases with empty lists'
    ],
    solved: false,
  },
  {
    id: '4',
    title: 'Valid Parentheses',
    description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
    difficulty: 'Easy',
    category: 'Stack',
    xpReward: 12,
    testCases: [
      { input: '"()"', expectedOutput: 'true', isHidden: false },
      { input: '"()[]{}"', expectedOutput: 'true', isHidden: false },
      { input: '"(]"', expectedOutput: 'false', isHidden: true },
    ],
    hints: [
      'Use a stack data structure',
      'Push opening brackets, pop for closing',
      'Check if brackets match properly'
    ],
    solved: false,
  },
  {
    id: '5',
    title: 'Maximum Subarray',
    description: 'Given an integer array nums, find the contiguous subarray with the largest sum, and return its sum.',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    xpReward: 20,
    testCases: [
      { input: '[-2,1,-3,4,-1,2,1,-5,4]', expectedOutput: '6', isHidden: false },
      { input: '[1]', expectedOutput: '1', isHidden: false },
      { input: '[5,4,-1,7,8]', expectedOutput: '23', isHidden: true },
    ],
    hints: [
      'Use Kadane\'s algorithm',
      'Keep track of current and maximum sum',
      'Reset current sum when it becomes negative'
    ],
    solved: false,
  }
];

// Get all problems
router.get('/', async (req, res) => {
  try {
    const { difficulty, category, search } = req.query;
    
    let filteredProblems = [...mockProblems];
    
    if (difficulty && difficulty !== 'All') {
      filteredProblems = filteredProblems.filter(p => p.difficulty === difficulty);
    }
    
    if (category && category !== 'All') {
      filteredProblems = filteredProblems.filter(p => p.category === category);
    }
    
    if (search) {
      filteredProblems = filteredProblems.filter(p => 
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    res.json(filteredProblems);
  } catch (error) {
    console.error('Get problems error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single problem
router.get('/:id', async (req, res) => {
  try {
    const problem = mockProblems.find(p => p.id === req.params.id);
    
    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    
    res.json(problem);
  } catch (error) {
    console.error('Get problem error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new problem (admin only)
router.post('/', async (req, res) => {
  try {
    const newProblem = {
      id: String(mockProblems.length + 1),
      ...req.body,
      solved: false
    };
    
    mockProblems.push(newProblem);
    
    res.status(201).json(newProblem);
  } catch (error) {
    console.error('Create problem error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update problem (admin only)
router.put('/:id', async (req, res) => {
  try {
    const problemIndex = mockProblems.findIndex(p => p.id === req.params.id);
    
    if (problemIndex === -1) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    
    mockProblems[problemIndex] = { ...mockProblems[problemIndex], ...req.body };
    
    res.json(mockProblems[problemIndex]);
  } catch (error) {
    console.error('Update problem error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete problem (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const problemIndex = mockProblems.findIndex(p => p.id === req.params.id);
    
    if (problemIndex === -1) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    
    mockProblems.splice(problemIndex, 1);
    
    res.json({ message: 'Problem deleted successfully' });
  } catch (error) {
    console.error('Delete problem error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;