export interface Problem {
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

export const problemsDatabase: Problem[] = [
  // STRINGS CATEGORY (30 problems)
  {
    id: 'string_1',
    title: 'Longest Substring Without Repeating Characters',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
    difficulty: 'Medium',
    category: 'String',
    xpReward: 15,
    testCases: [
      { input: '"abcabcbb"', expectedOutput: '3', isHidden: false },
      { input: '"bbbbb"', expectedOutput: '1', isHidden: false },
      { input: '"pwwkew"', expectedOutput: '3', isHidden: true },
      { input: '""', expectedOutput: '0', isHidden: true }
    ],
    hints: [
      'Use sliding window technique',
      'Keep track of characters with a hash set',
      'Move the left pointer when duplicate is found'
    ],
    constraints: ['0 ≤ s.length ≤ 5 * 10^4', 's consists of English letters, digits, symbols and spaces'],
    examples: [
      {
        input: 's = "abcabcbb"',
        output: '3',
        explanation: 'The answer is "abc", with the length of 3.'
      }
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
    // Your code here
    return 0;
}`,
      python: `def lengthOfLongestSubstring(s):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'string_2',
    title: 'Valid Palindrome',
    description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
    difficulty: 'Easy',
    category: 'String',
    xpReward: 10,
    testCases: [
      { input: '"A man, a plan, a canal: Panama"', expectedOutput: 'true', isHidden: false },
      { input: '"race a car"', expectedOutput: 'false', isHidden: false },
      { input: '" "', expectedOutput: 'true', isHidden: true }
    ],
    hints: [
      'Use two pointers from both ends',
      'Skip non-alphanumeric characters',
      'Compare characters in lowercase'
    ],
    constraints: ['1 ≤ s.length ≤ 2 * 10^5'],
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: 'true',
        explanation: '"amanaplanacanalpanama" is a palindrome.'
      }
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
    // Your code here
    return false;
}`,
      python: `def isPalindrome(s):
    # Your code here
    return False`,
      cpp: `class Solution {
public:
    bool isPalindrome(string s) {
        // Your code here
        return false;
    }
};`,
      java: `class Solution {
    public boolean isPalindrome(String s) {
        // Your code here
        return false;
    }
}`
    },
    solved: false
  },
  {
    id: 'string_3',
    title: 'Group Anagrams',
    description: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
    difficulty: 'Medium',
    category: 'String',
    xpReward: 15,
    testCases: [
      { input: '["eat","tea","tan","ate","nat","bat"]', expectedOutput: '[["bat"],["nat","tan"],["ate","eat","tea"]]', isHidden: false },
      { input: '[""]', expectedOutput: '[[""]]', isHidden: false },
      { input: '["a"]', expectedOutput: '[["a"]]', isHidden: true }
    ],
    hints: [
      'Sort characters in each string to find anagram key',
      'Use hash map to group anagrams',
      'Convert sorted string as key'
    ],
    constraints: ['1 ≤ strs.length ≤ 10^4', '0 ≤ strs[i].length ≤ 100'],
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
        explanation: 'Strings with same sorted characters are anagrams.'
      }
    ],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
    // Your code here
    return [];
}`,
      python: `def groupAnagrams(strs):
    # Your code here
    return []`,
      cpp: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // Your code here
        return {};
    }
};`,
      java: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // Your code here
        return new ArrayList<>();
    }
}`
    },
    solved: false
  },
  {
    id: 'string_4',
    title: 'Minimum Window Substring',
    description: 'Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t is included in the window.',
    difficulty: 'Hard',
    category: 'String',
    xpReward: 25,
    testCases: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', expectedOutput: '"BANC"', isHidden: false },
      { input: 's = "a", t = "a"', expectedOutput: '"a"', isHidden: false },
      { input: 's = "a", t = "aa"', expectedOutput: '""', isHidden: true }
    ],
    hints: [
      'Use sliding window with two pointers',
      'Keep count of characters needed',
      'Expand right, contract left when valid'
    ],
    constraints: ['m == s.length', 'n == t.length', '1 ≤ m, n ≤ 10^5'],
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation: 'The minimum window substring "BANC" includes all characters of t.'
      }
    ],
    starterCode: {
      javascript: `function minWindow(s, t) {
    // Your code here
    return "";
}`,
      python: `def minWindow(s, t):
    # Your code here
    return ""`,
      cpp: `class Solution {
public:
    string minWindow(string s, string t) {
        // Your code here
        return "";
    }
};`,
      java: `class Solution {
    public String minWindow(String s, String t) {
        // Your code here
        return "";
    }
}`
    },
    solved: false
  },
  {
    id: 'string_5',
    title: 'String to Integer (atoi)',
    description: 'Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.',
    difficulty: 'Medium',
    category: 'String',
    xpReward: 15,
    testCases: [
      { input: '"42"', expectedOutput: '42', isHidden: false },
      { input: '"   -42"', expectedOutput: '-42', isHidden: false },
      { input: '"4193 with words"', expectedOutput: '4193', isHidden: true }
    ],
    hints: [
      'Handle leading whitespaces',
      'Check for sign (+/-)',
      'Parse digits and handle overflow'
    ],
    constraints: ['0 ≤ s.length ≤ 200'],
    examples: [
      {
        input: 's = "42"',
        output: '42',
        explanation: 'The underlined characters are what is read in and the caret is the current reader position.'
      }
    ],
    starterCode: {
      javascript: `function myAtoi(s) {
    // Your code here
    return 0;
}`,
      python: `def myAtoi(s):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int myAtoi(string s) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int myAtoi(String s) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'string_6',
    title: 'Edit Distance',
    description: 'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.',
    difficulty: 'Hard',
    category: 'String',
    xpReward: 25,
    testCases: [
      { input: 'word1 = "horse", word2 = "ros"', expectedOutput: '3', isHidden: false },
      { input: 'word1 = "intention", word2 = "execution"', expectedOutput: '5', isHidden: false },
      { input: 'word1 = "", word2 = "a"', expectedOutput: '1', isHidden: true }
    ],
    hints: [
      'Use dynamic programming',
      'Consider insert, delete, replace operations',
      'Build 2D DP table'
    ],
    constraints: ['0 ≤ word1.length, word2.length ≤ 500'],
    examples: [
      {
        input: 'word1 = "horse", word2 = "ros"',
        output: '3',
        explanation: 'horse -> rorse (replace h with r), rorse -> rose (remove r), rose -> ros (remove e)'
      }
    ],
    starterCode: {
      javascript: `function minDistance(word1, word2) {
    // Your code here
    return 0;
}`,
      python: `def minDistance(word1, word2):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int minDistance(string word1, string word2) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int minDistance(String word1, String word2) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'string_7',
    title: 'Regular Expression Matching',
    description: 'Given an input string s and a pattern p, implement regular expression matching with support for "." and "*".',
    difficulty: 'Hard',
    category: 'String',
    xpReward: 25,
    testCases: [
      { input: 's = "aa", p = "a"', expectedOutput: 'false', isHidden: false },
      { input: 's = "aa", p = "a*"', expectedOutput: 'true', isHidden: false },
      { input: 's = "ab", p = ".*"', expectedOutput: 'true', isHidden: true }
    ],
    hints: [
      'Use dynamic programming',
      'Handle . and * patterns separately',
      'Consider empty string cases'
    ],
    constraints: ['1 ≤ s.length ≤ 20', '1 ≤ p.length ≤ 30'],
    examples: [
      {
        input: 's = "aa", p = "a*"',
        output: 'true',
        explanation: '"*" means zero or more of the preceding element, "a". Therefore, by repeating "a" once, it becomes "aa".'
      }
    ],
    starterCode: {
      javascript: `function isMatch(s, p) {
    // Your code here
    return false;
}`,
      python: `def isMatch(s, p):
    # Your code here
    return False`,
      cpp: `class Solution {
public:
    bool isMatch(string s, string p) {
        // Your code here
        return false;
    }
};`,
      java: `class Solution {
    public boolean isMatch(String s, String p) {
        // Your code here
        return false;
    }
}`
    },
    solved: false
  },
  {
    id: 'string_8',
    title: 'First Unique Character in a String',
    description: 'Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.',
    difficulty: 'Easy',
    category: 'String',
    xpReward: 10,
    testCases: [
      { input: '"leetcode"', expectedOutput: '0', isHidden: false },
      { input: '"loveleetcode"', expectedOutput: '2', isHidden: false },
      { input: '"aabb"', expectedOutput: '-1', isHidden: true }
    ],
    hints: [
      'Count frequency of each character',
      'Find first character with frequency 1',
      'Use hash map for counting'
    ],
    constraints: ['1 ≤ s.length ≤ 10^5'],
    examples: [
      {
        input: 's = "leetcode"',
        output: '0',
        explanation: 'The first unique character is "l" at index 0.'
      }
    ],
    starterCode: {
      javascript: `function firstUniqChar(s) {
    // Your code here
    return -1;
}`,
      python: `def firstUniqChar(s):
    # Your code here
    return -1`,
      cpp: `class Solution {
public:
    int firstUniqChar(string s) {
        // Your code here
        return -1;
    }
};`,
      java: `class Solution {
    public int firstUniqChar(String s) {
        // Your code here
        return -1;
    }
}`
    },
    solved: false
  },
  {
    id: 'string_9',
    title: 'Longest Palindromic Substring',
    description: 'Given a string s, return the longest palindromic substring in s.',
    difficulty: 'Medium',
    category: 'String',
    xpReward: 15,
    testCases: [
      { input: '"babad"', expectedOutput: '"bab"', isHidden: false },
      { input: '"cbbd"', expectedOutput: '"bb"', isHidden: false },
      { input: '"a"', expectedOutput: '"a"', isHidden: true }
    ],
    hints: [
      'Expand around centers',
      'Check both odd and even length palindromes',
      'Keep track of longest palindrome found'
    ],
    constraints: ['1 ≤ s.length ≤ 1000'],
    examples: [
      {
        input: 's = "babad"',
        output: '"bab"',
        explanation: '"aba" is also a valid answer.'
      }
    ],
    starterCode: {
      javascript: `function longestPalindrome(s) {
    // Your code here
    return "";
}`,
      python: `def longestPalindrome(s):
    # Your code here
    return ""`,
      cpp: `class Solution {
public:
    string longestPalindrome(string s) {
        // Your code here
        return "";
    }
};`,
      java: `class Solution {
    public String longestPalindrome(String s) {
        // Your code here
        return "";
    }
}`
    },
    solved: false
  },
  {
    id: 'string_10',
    title: 'Add Binary',
    description: 'Given two binary strings a and b, return their sum as a binary string.',
    difficulty: 'Easy',
    category: 'String',
    xpReward: 10,
    testCases: [
      { input: 'a = "11", b = "1"', expectedOutput: '"100"', isHidden: false },
      { input: 'a = "1010", b = "1011"', expectedOutput: '"10101"', isHidden: false },
      { input: 'a = "0", b = "0"', expectedOutput: '"0"', isHidden: true }
    ],
    hints: [
      'Process from right to left',
      'Keep track of carry',
      'Handle different string lengths'
    ],
    constraints: ['1 ≤ a.length, b.length ≤ 10^4'],
    examples: [
      {
        input: 'a = "11", b = "1"',
        output: '"100"',
        explanation: '11 + 1 = 100 in binary'
      }
    ],
    starterCode: {
      javascript: `function addBinary(a, b) {
    // Your code here
    return "";
}`,
      python: `def addBinary(a, b):
    # Your code here
    return ""`,
      cpp: `class Solution {
public:
    string addBinary(string a, string b) {
        // Your code here
        return "";
    }
};`,
      java: `class Solution {
    public String addBinary(String a, String b) {
        // Your code here
        return "";
    }
}`
    },
    solved: false
  },

  // QUEUE CATEGORY (10 problems)
  {
    id: 'queue_1',
    title: 'Sliding Window Maximum',
    description: 'You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right.',
    difficulty: 'Hard',
    category: 'Queue',
    xpReward: 25,
    testCases: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', expectedOutput: '[3,3,5,5,6,7]', isHidden: false },
      { input: 'nums = [1], k = 1', expectedOutput: '[1]', isHidden: false },
      { input: 'nums = [1,-1], k = 1', expectedOutput: '[1,-1]', isHidden: true }
    ],
    hints: [
      'Use deque to maintain window maximum',
      'Keep deque in decreasing order',
      'Remove elements outside window'
    ],
    constraints: ['1 ≤ nums.length ≤ 10^5', '-10^4 ≤ nums[i] ≤ 10^4', '1 ≤ k ≤ nums.length'],
    examples: [
      {
        input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
        output: '[3,3,5,5,6,7]',
        explanation: 'Window position -> Maximum\n[1  3  -1] -3  5  3  6  7 -> 3'
      }
    ],
    starterCode: {
      javascript: `function maxSlidingWindow(nums, k) {
    // Your code here
    return [];
}`,
      python: `def maxSlidingWindow(nums, k):
    # Your code here
    return []`,
      cpp: `class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        // Your code here
        return {};
    }
};`,
      java: `class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        // Your code here
        return new int[0];
    }
}`
    },
    solved: false
  },
  {
    id: 'queue_2',
    title: 'Rotting Oranges',
    description: 'You are given an m x n grid where each cell can have one of three values: 0 (empty), 1 (fresh orange), or 2 (rotten orange).',
    difficulty: 'Medium',
    category: 'Queue',
    xpReward: 15,
    testCases: [
      { input: '[[2,1,1],[1,1,0],[0,1,1]]', expectedOutput: '4', isHidden: false },
      { input: '[[2,1,1],[0,1,1],[1,0,1]]', expectedOutput: '-1', isHidden: false },
      { input: '[[0,2]]', expectedOutput: '0', isHidden: true }
    ],
    hints: [
      'Use BFS to simulate rotting process',
      'Start from all rotten oranges simultaneously',
      'Count minutes until all oranges rot'
    ],
    constraints: ['m == grid.length', 'n == grid[i].length', '1 ≤ m, n ≤ 10'],
    examples: [
      {
        input: 'grid = [[2,1,1],[1,1,0],[0,1,1]]',
        output: '4',
        explanation: 'After 4 minutes, all oranges will be rotten.'
      }
    ],
    starterCode: {
      javascript: `function orangesRotting(grid) {
    // Your code here
    return 0;
}`,
      python: `def orangesRotting(grid):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int orangesRotting(int[][] grid) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'queue_3',
    title: 'Implement Queue using Stacks',
    description: 'Implement a first in first out (FIFO) queue using only two stacks.',
    difficulty: 'Easy',
    category: 'Queue',
    xpReward: 10,
    testCases: [
      { input: '["MyQueue", "push", "push", "peek", "pop", "empty"]', expectedOutput: '[null, null, null, 1, 1, false]', isHidden: false },
      { input: '["MyQueue", "push", "pop", "empty"]', expectedOutput: '[null, null, 1, true]', isHidden: true }
    ],
    hints: [
      'Use two stacks: input and output',
      'Transfer elements when output stack is empty',
      'Maintain FIFO order'
    ],
    constraints: ['1 ≤ x ≤ 9', 'At most 100 calls will be made'],
    examples: [
      {
        input: 'MyQueue myQueue = new MyQueue();\nmyQueue.push(1);\nmyQueue.push(2);',
        output: 'myQueue.peek(); // return 1\nmyQueue.pop(); // return 1',
        explanation: 'Queue operations using two stacks.'
      }
    ],
    starterCode: {
      javascript: `class MyQueue {
    constructor() {
        // Your code here
    }
    
    push(x) {
        // Your code here
    }
    
    pop() {
        // Your code here
    }
    
    peek() {
        // Your code here
    }
    
    empty() {
        // Your code here
    }
}`,
      python: `class MyQueue:
    def __init__(self):
        # Your code here
        pass
    
    def push(self, x):
        # Your code here
        pass
    
    def pop(self):
        # Your code here
        pass
    
    def peek(self):
        # Your code here
        pass
    
    def empty(self):
        # Your code here
        pass`,
      cpp: `class MyQueue {
public:
    MyQueue() {
        // Your code here
    }
    
    void push(int x) {
        // Your code here
    }
    
    int pop() {
        // Your code here
        return 0;
    }
    
    int peek() {
        // Your code here
        return 0;
    }
    
    bool empty() {
        // Your code here
        return true;
    }
};`,
      java: `class MyQueue {
    public MyQueue() {
        // Your code here
    }
    
    public void push(int x) {
        // Your code here
    }
    
    public int pop() {
        // Your code here
        return 0;
    }
    
    public int peek() {
        // Your code here
        return 0;
    }
    
    public boolean empty() {
        // Your code here
        return true;
    }
}`
    },
    solved: false
  },
  {
    id: 'queue_4',
    title: 'Moving Average from Data Stream',
    description: 'Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.',
    difficulty: 'Easy',
    category: 'Queue',
    xpReward: 10,
    testCases: [
      { input: 'MovingAverage(3), next(1), next(10), next(3), next(5)', expectedOutput: '[1.0, 5.5, 4.66667, 6.0]', isHidden: false },
      { input: 'MovingAverage(1), next(1), next(2)', expectedOutput: '[1.0, 2.0]', isHidden: true }
    ],
    hints: [
      'Use queue to maintain window',
      'Keep running sum for efficiency',
      'Remove oldest element when window exceeds size'
    ],
    constraints: ['1 ≤ size ≤ 1000', '-10^5 ≤ val ≤ 10^5'],
    examples: [
      {
        input: 'MovingAverage movingAverage = new MovingAverage(3);',
        output: 'movingAverage.next(1); // return 1.0',
        explanation: 'Calculate moving average in sliding window.'
      }
    ],
    starterCode: {
      javascript: `class MovingAverage {
    constructor(size) {
        // Your code here
    }
    
    next(val) {
        // Your code here
        return 0.0;
    }
}`,
      python: `class MovingAverage:
    def __init__(self, size):
        # Your code here
        pass
    
    def next(self, val):
        # Your code here
        return 0.0`,
      cpp: `class MovingAverage {
public:
    MovingAverage(int size) {
        // Your code here
    }
    
    double next(int val) {
        // Your code here
        return 0.0;
    }
};`,
      java: `class MovingAverage {
    public MovingAverage(int size) {
        // Your code here
    }
    
    public double next(int val) {
        // Your code here
        return 0.0;
    }
}`
    },
    solved: false
  },
  {
    id: 'queue_5',
    title: 'Task Scheduler',
    description: 'Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task.',
    difficulty: 'Medium',
    category: 'Queue',
    xpReward: 15,
    testCases: [
      { input: 'tasks = ["A","A","A","B","B","B"], n = 2', expectedOutput: '8', isHidden: false },
      { input: 'tasks = ["A","A","A","B","B","B"], n = 0', expectedOutput: '6', isHidden: false },
      { input: 'tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2', expectedOutput: '16', isHidden: true }
    ],
    hints: [
      'Use priority queue for task frequencies',
      'Consider cooling time between same tasks',
      'Fill idle time with other tasks'
    ],
    constraints: ['1 ≤ task.length ≤ 10^4', '0 ≤ n ≤ 100'],
    examples: [
      {
        input: 'tasks = ["A","A","A","B","B","B"], n = 2',
        output: '8',
        explanation: 'A -> B -> idle -> A -> B -> idle -> A -> B'
      }
    ],
    starterCode: {
      javascript: `function leastInterval(tasks, n) {
    // Your code here
    return 0;
}`,
      python: `def leastInterval(tasks, n):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int leastInterval(char[] tasks, int n) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'queue_6',
    title: 'Walls and Gates',
    description: 'You are given an m x n grid rooms initialized with these three possible values: -1 (wall), 0 (gate), INF (empty room).',
    difficulty: 'Medium',
    category: 'Queue',
    xpReward: 15,
    testCases: [
      { input: '[[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]', expectedOutput: '[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]', isHidden: false }
    ],
    hints: [
      'Use multi-source BFS from all gates',
      'Update distances to nearest gate',
      'Process all gates simultaneously'
    ],
    constraints: ['m == rooms.length', 'n == rooms[i].length', '1 ≤ m, n ≤ 250'],
    examples: [
      {
        input: 'rooms = [[INF,-1,0,INF],[INF,INF,INF,-1],[INF,-1,INF,-1],[0,-1,INF,INF]]',
        output: '[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]',
        explanation: 'Fill each empty room with distance to nearest gate.'
      }
    ],
    starterCode: {
      javascript: `function wallsAndGates(rooms) {
    // Your code here
}`,
      python: `def wallsAndGates(rooms):
    # Your code here
    pass`,
      cpp: `class Solution {
public:
    void wallsAndGates(vector<vector<int>>& rooms) {
        // Your code here
    }
};`,
      java: `class Solution {
    public void wallsAndGates(int[][] rooms) {
        // Your code here
    }
}`
    },
    solved: false
  },
  {
    id: 'queue_7',
    title: 'Number of Islands (BFS)',
    description: 'Given an m x n 2D binary grid which represents a map of "1"s (land) and "0"s (water), return the number of islands.',
    difficulty: 'Medium',
    category: 'Queue',
    xpReward: 15,
    testCases: [
      { input: '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', expectedOutput: '1', isHidden: false },
      { input: '[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', expectedOutput: '3', isHidden: false }
    ],
    hints: [
      'Use BFS to explore each island',
      'Mark visited cells to avoid counting twice',
      'Count connected components'
    ],
    constraints: ['m == grid.length', 'n == grid[i].length', '1 ≤ m, n ≤ 300'],
    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: '1',
        explanation: 'All connected 1s form one island.'
      }
    ],
    starterCode: {
      javascript: `function numIslands(grid) {
    // Your code here
    return 0;
}`,
      python: `def numIslands(grid):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int numIslands(char[][] grid) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'queue_8',
    title: 'Shortest Path in Binary Matrix',
    description: 'Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix.',
    difficulty: 'Medium',
    category: 'Queue',
    xpReward: 15,
    testCases: [
      { input: '[[0,1],[1,0]]', expectedOutput: '2', isHidden: false },
      { input: '[[0,0,0],[1,1,0],[1,1,0]]', expectedOutput: '4', isHidden: false },
      { input: '[[1,0,0],[1,1,0],[1,1,0]]', expectedOutput: '-1', isHidden: true }
    ],
    hints: [
      'Use BFS for shortest path',
      'Check all 8 directions',
      'Start from top-left, reach bottom-right'
    ],
    constraints: ['n == grid.length', 'n == grid[i].length', '1 ≤ n ≤ 100'],
    examples: [
      {
        input: 'grid = [[0,1],[1,0]]',
        output: '2',
        explanation: 'Path: (0,0) -> (1,1)'
      }
    ],
    starterCode: {
      javascript: `function shortestPathBinaryMatrix(grid) {
    // Your code here
    return -1;
}`,
      python: `def shortestPathBinaryMatrix(grid):
    # Your code here
    return -1`,
      cpp: `class Solution {
public:
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        // Your code here
        return -1;
    }
};`,
      java: `class Solution {
    public int shortestPathBinaryMatrix(int[][] grid) {
        // Your code here
        return -1;
    }
}`
    },
    solved: false
  },

  // LINKED LIST CATEGORY (10 problems)
  {
    id: 'linkedlist_1',
    title: 'Add Two Numbers',
    description: 'You are given two non-empty linked lists representing two non-negative integers stored in reverse order.',
    difficulty: 'Medium',
    category: 'Linked List',
    xpReward: 15,
    testCases: [
      { input: 'l1 = [2,4,3], l2 = [5,6,4]', expectedOutput: '[7,0,8]', isHidden: false },
      { input: 'l1 = [0], l2 = [0]', expectedOutput: '[0]', isHidden: false },
      { input: 'l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]', expectedOutput: '[8,9,9,9,0,0,0,1]', isHidden: true }
    ],
    hints: [
      'Process digits from left to right',
      'Keep track of carry',
      'Handle different list lengths'
    ],
    constraints: ['The number of nodes in each linked list is in the range [1, 100]', '0 ≤ Node.val ≤ 9'],
    examples: [
      {
        input: 'l1 = [2,4,3], l2 = [5,6,4]',
        output: '[7,0,8]',
        explanation: '342 + 465 = 807'
      }
    ],
    starterCode: {
      javascript: `function addTwoNumbers(l1, l2) {
    // Your code here
    return null;
}`,
      python: `def addTwoNumbers(l1, l2):
    # Your code here
    return None`,
      cpp: `class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        // Your code here
        return nullptr;
    }
};`,
      java: `class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // Your code here
        return null;
    }
}`
    },
    solved: false
  },
  {
    id: 'linkedlist_2',
    title: 'Merge Two Sorted Lists',
    description: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list.',
    difficulty: 'Easy',
    category: 'Linked List',
    xpReward: 10,
    testCases: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', expectedOutput: '[1,1,2,3,4,4]', isHidden: false },
      { input: 'list1 = [], list2 = []', expectedOutput: '[]', isHidden: false },
      { input: 'list1 = [], list2 = [0]', expectedOutput: '[0]', isHidden: true }
    ],
    hints: [
      'Use two pointers to compare nodes',
      'Create new list or modify existing',
      'Handle remaining nodes'
    ],
    constraints: ['The number of nodes in both lists is in the range [0, 50]', '-100 ≤ Node.val ≤ 100'],
    examples: [
      {
        input: 'list1 = [1,2,4], list2 = [1,3,4]',
        output: '[1,1,2,3,4,4]',
        explanation: 'Merge two sorted lists into one.'
      }
    ],
    starterCode: {
      javascript: `function mergeTwoLists(list1, list2) {
    // Your code here
    return null;
}`,
      python: `def mergeTwoLists(list1, list2):
    # Your code here
    return None`,
      cpp: `class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        // Your code here
        return nullptr;
    }
};`,
      java: `class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Your code here
        return null;
    }
}`
    },
    solved: false
  },
  {
    id: 'linkedlist_3',
    title: 'Reverse Linked List',
    description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    difficulty: 'Easy',
    category: 'Linked List',
    xpReward: 10,
    testCases: [
      { input: '[1,2,3,4,5]', expectedOutput: '[5,4,3,2,1]', isHidden: false },
      { input: '[1,2]', expectedOutput: '[2,1]', isHidden: false },
      { input: '[]', expectedOutput: '[]', isHidden: true }
    ],
    hints: [
      'Use three pointers: prev, current, next',
      'Reverse links one by one',
      'Handle edge cases'
    ],
    constraints: ['The number of nodes in the list is the range [0, 5000]', '-5000 ≤ Node.val ≤ 5000'],
    examples: [
      {
        input: 'head = [1,2,3,4,5]',
        output: '[5,4,3,2,1]',
        explanation: 'Reverse the linked list.'
      }
    ],
    starterCode: {
      javascript: `function reverseList(head) {
    // Your code here
    return null;
}`,
      python: `def reverseList(head):
    # Your code here
    return None`,
      cpp: `class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // Your code here
        return nullptr;
    }
};`,
      java: `class Solution {
    public ListNode reverseList(ListNode head) {
        // Your code here
        return null;
    }
}`
    },
    solved: false
  },
  {
    id: 'linkedlist_4',
    title: 'Linked List Cycle',
    description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it.',
    difficulty: 'Easy',
    category: 'Linked List',
    xpReward: 10,
    testCases: [
      { input: 'head = [3,2,0,-4], pos = 1', expectedOutput: 'true', isHidden: false },
      { input: 'head = [1,2], pos = 0', expectedOutput: 'true', isHidden: false },
      { input: 'head = [1], pos = -1', expectedOutput: 'false', isHidden: true }
    ],
    hints: [
      'Use Floyd\'s cycle detection algorithm',
      'Two pointers: slow and fast',
      'If fast catches slow, there\'s a cycle'
    ],
    constraints: ['The number of the nodes in the list is in the range [0, 10^4]', '-10^5 ≤ Node.val ≤ 10^5'],
    examples: [
      {
        input: 'head = [3,2,0,-4], pos = 1',
        output: 'true',
        explanation: 'There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).'
      }
    ],
    starterCode: {
      javascript: `function hasCycle(head) {
    // Your code here
    return false;
}`,
      python: `def hasCycle(head):
    # Your code here
    return False`,
      cpp: `class Solution {
public:
    bool hasCycle(ListNode *head) {
        // Your code here
        return false;
    }
};`,
      java: `class Solution {
    public boolean hasCycle(ListNode head) {
        // Your code here
        return false;
    }
}`
    },
    solved: false
  },
  {
    id: 'linkedlist_5',
    title: 'Intersection of Two Linked Lists',
    description: 'Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.',
    difficulty: 'Easy',
    category: 'Linked List',
    xpReward: 10,
    testCases: [
      { input: 'intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]', expectedOutput: '8', isHidden: false },
      { input: 'intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4]', expectedOutput: '2', isHidden: false },
      { input: 'intersectVal = 0, listA = [2,6,4], listB = [1,5]', expectedOutput: 'null', isHidden: true }
    ],
    hints: [
      'Calculate lengths of both lists',
      'Align starting positions',
      'Move both pointers until they meet'
    ],
    constraints: ['The number of nodes of listA is in the m', 'The number of nodes of listB is in the n'],
    examples: [
      {
        input: 'intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]',
        output: 'Reference of the node with value = 8',
        explanation: 'The intersected node\'s value is 8.'
      }
    ],
    starterCode: {
      javascript: `function getIntersectionNode(headA, headB) {
    // Your code here
    return null;
}`,
      python: `def getIntersectionNode(headA, headB):
    # Your code here
    return None`,
      cpp: `class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        // Your code here
        return nullptr;
    }
};`,
      java: `class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        // Your code here
        return null;
    }
}`
    },
    solved: false
  },
  {
    id: 'linkedlist_6',
    title: 'Copy List with Random Pointer',
    description: 'A linked list of length n is given such that each node contains an additional random pointer.',
    difficulty: 'Medium',
    category: 'Linked List',
    xpReward: 15,
    testCases: [
      { input: '[[7,null],[13,0],[11,4],[10,2],[1,0]]', expectedOutput: '[[7,null],[13,0],[11,4],[10,2],[1,0]]', isHidden: false },
      { input: '[[1,1],[2,1]]', expectedOutput: '[[1,1],[2,1]]', isHidden: false },
      { input: '[[3,null],[3,0],[3,null]]', expectedOutput: '[[3,null],[3,0],[3,null]]', isHidden: true }
    ],
    hints: [
      'Use hash map to store original to copy mapping',
      'First pass: create nodes',
      'Second pass: set next and random pointers'
    ],
    constraints: ['0 ≤ n ≤ 1000', '-10^4 ≤ Node.val ≤ 10^4'],
    examples: [
      {
        input: 'head = [[7,null],[13,0],[11,4],[10,2],[1,0]]',
        output: '[[7,null],[13,0],[11,4],[10,2],[1,0]]',
        explanation: 'Deep copy of the linked list with random pointers.'
      }
    ],
    starterCode: {
      javascript: `function copyRandomList(head) {
    // Your code here
    return null;
}`,
      python: `def copyRandomList(head):
    # Your code here
    return None`,
      cpp: `class Solution {
public:
    Node* copyRandomList(Node* head) {
        // Your code here
        return nullptr;
    }
};`,
      java: `class Solution {
    public Node copyRandomList(Node head) {
        // Your code here
        return null;
    }
}`
    },
    solved: false
  },
  {
    id: 'linkedlist_7',
    title: 'LRU Cache',
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.',
    difficulty: 'Medium',
    category: 'Linked List',
    xpReward: 15,
    testCases: [
      { input: '["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]', expectedOutput: '[null, null, null, 1, null, -1, null, -1, 3, 4]', isHidden: false }
    ],
    hints: [
      'Use doubly linked list + hash map',
      'Move accessed nodes to front',
      'Remove least recently used from back'
    ],
    constraints: ['1 ≤ capacity ≤ 3000', '0 ≤ key ≤ 10^4', '0 ≤ value ≤ 10^5'],
    examples: [
      {
        input: 'LRUCache lRUCache = new LRUCache(2);',
        output: 'lRUCache.put(1, 1); // cache is {1=1}',
        explanation: 'LRU cache operations.'
      }
    ],
    starterCode: {
      javascript: `class LRUCache {
    constructor(capacity) {
        // Your code here
    }
    
    get(key) {
        // Your code here
        return -1;
    }
    
    put(key, value) {
        // Your code here
    }
}`,
      python: `class LRUCache:
    def __init__(self, capacity):
        # Your code here
        pass
    
    def get(self, key):
        # Your code here
        return -1
    
    def put(self, key, value):
        # Your code here
        pass`,
      cpp: `class LRUCache {
public:
    LRUCache(int capacity) {
        // Your code here
    }
    
    int get(int key) {
        // Your code here
        return -1;
    }
    
    void put(int key, int value) {
        // Your code here
    }
};`,
      java: `class LRUCache {
    public LRUCache(int capacity) {
        // Your code here
    }
    
    public int get(int key) {
        // Your code here
        return -1;
    }
    
    public void put(int key, int value) {
        // Your code here
    }
}`
    },
    solved: false
  },
  {
    id: 'linkedlist_8',
    title: 'Merge k Sorted Lists',
    description: 'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.',
    difficulty: 'Hard',
    category: 'Linked List',
    xpReward: 25,
    testCases: [
      { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', expectedOutput: '[1,1,2,3,4,4,5,6]', isHidden: false },
      { input: 'lists = []', expectedOutput: '[]', isHidden: false },
      { input: 'lists = [[]]', expectedOutput: '[]', isHidden: true }
    ],
    hints: [
      'Use divide and conquer approach',
      'Merge lists pairwise',
      'Use priority queue for efficient merging'
    ],
    constraints: ['k == lists.length', '0 ≤ k ≤ 10^4', '0 ≤ lists[i].length ≤ 500'],
    examples: [
      {
        input: 'lists = [[1,4,5],[1,3,4],[2,6]]',
        output: '[1,1,2,3,4,4,5,6]',
        explanation: 'Merge all sorted lists into one.'
      }
    ],
    starterCode: {
      javascript: `function mergeKLists(lists) {
    // Your code here
    return null;
}`,
      python: `def mergeKLists(lists):
    # Your code here
    return None`,
      cpp: `class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // Your code here
        return nullptr;
    }
};`,
      java: `class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        // Your code here
        return null;
    }
}`
    },
    solved: false
  },

  // STACK CATEGORY (10 problems)
  {
    id: 'stack_1',
    title: 'Valid Parentheses',
    description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
    difficulty: 'Easy',
    category: 'Stack',
    xpReward: 10,
    testCases: [
      { input: '"()"', expectedOutput: 'true', isHidden: false },
      { input: '"()[]{}"', expectedOutput: 'true', isHidden: false },
      { input: '"(]"', expectedOutput: 'false', isHidden: true }
    ],
    hints: [
      'Use stack to track opening brackets',
      'Match closing brackets with stack top',
      'Stack should be empty at the end'
    ],
    constraints: ['1 ≤ s.length ≤ 10^4', 's consists of parentheses only'],
    examples: [
      {
        input: 's = "()"',
        output: 'true',
        explanation: 'Valid parentheses.'
      }
    ],
    starterCode: {
      javascript: `function isValid(s) {
    // Your code here
    return false;
}`,
      python: `def isValid(s):
    # Your code here
    return False`,
      cpp: `class Solution {
public:
    bool isValid(string s) {
        // Your code here
        return false;
    }
};`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Your code here
        return false;
    }
}`
    },
    solved: false
  },
  {
    id: 'stack_2',
    title: 'Min Stack',
    description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
    difficulty: 'Medium',
    category: 'Stack',
    xpReward: 15,
    testCases: [
      { input: '["MinStack","push","push","push","getMin","pop","top","getMin"]', expectedOutput: '[null,null,null,null,-3,null,0,-2]', isHidden: false }
    ],
    hints: [
      'Use auxiliary stack for minimums',
      'Keep track of minimum at each level',
      'Update minimum on push/pop'
    ],
    constraints: ['-2^31 ≤ val ≤ 2^31 - 1', 'Methods pop, top and getMin will always be called on non-empty stacks'],
    examples: [
      {
        input: 'MinStack minStack = new MinStack();',
        output: 'minStack.push(-2);',
        explanation: 'Stack operations with minimum tracking.'
      }
    ],
    starterCode: {
      javascript: `class MinStack {
    constructor() {
        // Your code here
    }
    
    push(val) {
        // Your code here
    }
    
    pop() {
        // Your code here
    }
    
    top() {
        // Your code here
        return 0;
    }
    
    getMin() {
        // Your code here
        return 0;
    }
}`,
      python: `class MinStack:
    def __init__(self):
        # Your code here
        pass
    
    def push(self, val):
        # Your code here
        pass
    
    def pop(self):
        # Your code here
        pass
    
    def top(self):
        # Your code here
        return 0
    
    def getMin(self):
        # Your code here
        return 0`,
      cpp: `class MinStack {
public:
    MinStack() {
        // Your code here
    }
    
    void push(int val) {
        // Your code here
    }
    
    void pop() {
        // Your code here
    }
    
    int top() {
        // Your code here
        return 0;
    }
    
    int getMin() {
        // Your code here
        return 0;
    }
};`,
      java: `class MinStack {
    public MinStack() {
        // Your code here
    }
    
    public void push(int val) {
        // Your code here
    }
    
    public void pop() {
        // Your code here
    }
    
    public int top() {
        // Your code here
        return 0;
    }
    
    public int getMin() {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'stack_3',
    title: 'Daily Temperatures',
    description: 'Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.',
    difficulty: 'Medium',
    category: 'Stack',
    xpReward: 15,
    testCases: [
      { input: '[73,74,75,71,69,72,76,73]', expectedOutput: '[1,1,4,2,1,1,0,0]', isHidden: false },
      { input: '[30,40,50,60]', expectedOutput: '[1,1,1,0]', isHidden: false },
      { input: '[30,60,90]', expectedOutput: '[1,1,0]', isHidden: true }
    ],
    hints: [
      'Use monotonic decreasing stack',
      'Store indices in stack',
      'Pop when current temperature is higher'
    ],
    constraints: ['1 ≤ temperatures.length ≤ 10^5', '30 ≤ temperatures[i] ≤ 100'],
    examples: [
      {
        input: 'temperatures = [73,74,75,71,69,72,76,73]',
        output: '[1,1,4,2,1,1,0,0]',
        explanation: 'Days to wait for warmer temperature.'
      }
    ],
    starterCode: {
      javascript: `function dailyTemperatures(temperatures) {
    // Your code here
    return [];
}`,
      python: `def dailyTemperatures(temperatures):
    # Your code here
    return []`,
      cpp: `class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        // Your code here
        return {};
    }
};`,
      java: `class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        // Your code here
        return new int[0];
    }
}`
    },
    solved: false
  },
  {
    id: 'stack_4',
    title: 'Evaluate Reverse Polish Notation',
    description: 'Evaluate the value of an arithmetic expression in Reverse Polish Notation.',
    difficulty: 'Medium',
    category: 'Stack',
    xpReward: 15,
    testCases: [
      { input: '["2","1","+","3","*"]', expectedOutput: '9', isHidden: false },
      { input: '["4","13","5","/","+"]', expectedOutput: '6', isHidden: false },
      { input: '["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', expectedOutput: '22', isHidden: true }
    ],
    hints: [
      'Use stack to store operands',
      'Pop two operands for each operator',
      'Push result back to stack'
    ],
    constraints: ['1 ≤ tokens.length ≤ 10^4', 'tokens[i] is either an operator or an integer'],
    examples: [
      {
        input: 'tokens = ["2","1","+","3","*"]',
        output: '9',
        explanation: '((2 + 1) * 3) = 9'
      }
    ],
    starterCode: {
      javascript: `function evalRPN(tokens) {
    // Your code here
    return 0;
}`,
      python: `def evalRPN(tokens):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int evalRPN(String[] tokens) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'stack_5',
    title: 'Largest Rectangle in Histogram',
    description: 'Given an array of integers heights representing the histogram\'s bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.',
    difficulty: 'Hard',
    category: 'Stack',
    xpReward: 25,
    testCases: [
      { input: '[2,1,5,6,2,3]', expectedOutput: '10', isHidden: false },
      { input: '[2,4]', expectedOutput: '4', isHidden: false },
      { input: '[1]', expectedOutput: '1', isHidden: true }
    ],
    hints: [
      'Use monotonic increasing stack',
      'Calculate area when height decreases',
      'Consider each bar as potential height'
    ],
    constraints: ['1 ≤ heights.length ≤ 10^5', '0 ≤ heights[i] ≤ 10^4'],
    examples: [
      {
        input: 'heights = [2,1,5,6,2,3]',
        output: '10',
        explanation: 'The largest rectangle has area 10 (heights 5,6 with width 2).'
      }
    ],
    starterCode: {
      javascript: `function largestRectangleArea(heights) {
    // Your code here
    return 0;
}`,
      python: `def largestRectangleArea(heights):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int largestRectangleArea(int[] heights) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'stack_6',
    title: 'Trapping Rain Water',
    description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    difficulty: 'Hard',
    category: 'Stack',
    xpReward: 25,
    testCases: [
      { input: '[0,1,0,2,1,0,1,3,2,1,2,1]', expectedOutput: '6', isHidden: false },
      { input: '[4,2,0,3,2,5]', expectedOutput: '9', isHidden: false },
      { input: '[3,0,2,0,4]', expectedOutput: '7', isHidden: true }
    ],
    hints: [
      'Use stack to track potential water boundaries',
      'Calculate water when height increases',
      'Consider width and height of trapped water'
    ],
    constraints: ['n == height.length', '1 ≤ n ≤ 2 * 10^4', '0 ≤ height[i] ≤ 10^5'],
    examples: [
      {
        input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
        output: '6',
        explanation: 'Water trapped between elevation bars.'
      }
    ],
    starterCode: {
      javascript: `function trap(height) {
    // Your code here
    return 0;
}`,
      python: `def trap(height):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int trap(vector<int>& height) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int trap(int[] height) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'stack_7',
    title: 'Basic Calculator',
    description: 'Given a string s representing a valid expression, implement a basic calculator to evaluate it.',
    difficulty: 'Hard',
    category: 'Stack',
    xpReward: 25,
    testCases: [
      { input: '"1 + 1"', expectedOutput: '2', isHidden: false },
      { input: '" 2-1 + 2 "', expectedOutput: '3', isHidden: false },
      { input: '"(1+(4+5+2)-3)+(6+8)"', expectedOutput: '23', isHidden: true }
    ],
    hints: [
      'Use stack for parentheses handling',
      'Keep track of sign and current number',
      'Process operators and parentheses'
    ],
    constraints: ['1 ≤ s.length ≤ 3 * 10^5', 's consists of digits, "+", "-", "(", ")", and " "'],
    examples: [
      {
        input: 's = "1 + 1"',
        output: '2',
        explanation: 'Basic arithmetic evaluation.'
      }
    ],
    starterCode: {
      javascript: `function calculate(s) {
    // Your code here
    return 0;
}`,
      python: `def calculate(s):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int calculate(string s) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int calculate(String s) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'stack_8',
    title: 'Remove K Digits',
    description: 'Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.',
    difficulty: 'Medium',
    category: 'Stack',
    xpReward: 15,
    testCases: [
      { input: 'num = "1432219", k = 3', expectedOutput: '"1219"', isHidden: false },
      { input: 'num = "10200", k = 1', expectedOutput: '"200"', isHidden: false },
      { input: 'num = "10", k = 2', expectedOutput: '"0"', isHidden: true }
    ],
    hints: [
      'Use greedy approach with stack',
      'Remove larger digits when possible',
      'Handle leading zeros'
    ],
    constraints: ['1 ≤ k ≤ num.length ≤ 10^5', 'num consists of only digits'],
    examples: [
      {
        input: 'num = "1432219", k = 3',
        output: '"1219"',
        explanation: 'Remove digits 4, 3, and 2 to get smallest number.'
      }
    ],
    starterCode: {
      javascript: `function removeKdigits(num, k) {
    // Your code here
    return "0";
}`,
      python: `def removeKdigits(num, k):
    # Your code here
    return "0"`,
      cpp: `class Solution {
public:
    string removeKdigits(string num, int k) {
        // Your code here
        return "0";
    }
};`,
      java: `class Solution {
    public String removeKdigits(String num, int k) {
        // Your code here
        return "0";
    }
}`
    },
    solved: false
  },

  // GRAPH CATEGORY (10 problems)
  {
    id: 'graph_1',
    title: 'Number of Islands',
    description: 'Given an m x n 2D binary grid which represents a map of "1"s (land) and "0"s (water), return the number of islands.',
    difficulty: 'Medium',
    category: 'Graph',
    xpReward: 15,
    testCases: [
      { input: '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', expectedOutput: '1', isHidden: false },
      { input: '[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', expectedOutput: '3', isHidden: false }
    ],
    hints: [
      'Use DFS or BFS to explore islands',
      'Mark visited cells',
      'Count connected components'
    ],
    constraints: ['m == grid.length', 'n == grid[i].length', '1 ≤ m, n ≤ 300'],
    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: '1',
        explanation: 'All connected 1s form one island.'
      }
    ],
    starterCode: {
      javascript: `function numIslands(grid) {
    // Your code here
    return 0;
}`,
      python: `def numIslands(grid):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int numIslands(char[][] grid) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'graph_2',
    title: 'Course Schedule',
    description: 'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.',
    difficulty: 'Medium',
    category: 'Graph',
    xpReward: 15,
    testCases: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', expectedOutput: 'true', isHidden: false },
      { input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', expectedOutput: 'false', isHidden: false }
    ],
    hints: [
      'Use topological sorting',
      'Detect cycles in directed graph',
      'Use DFS or BFS approach'
    ],
    constraints: ['1 ≤ numCourses ≤ 2000', '0 ≤ prerequisites.length ≤ 5000'],
    examples: [
      {
        input: 'numCourses = 2, prerequisites = [[1,0]]',
        output: 'true',
        explanation: 'You can take course 1 after course 0.'
      }
    ],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
    // Your code here
    return false;
}`,
      python: `def canFinish(numCourses, prerequisites):
    # Your code here
    return False`,
      cpp: `class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        // Your code here
        return false;
    }
};`,
      java: `class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        // Your code here
        return false;
    }
}`
    },
    solved: false
  },
  {
    id: 'graph_3',
    title: 'Clone Graph',
    description: 'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.',
    difficulty: 'Medium',
    category: 'Graph',
    xpReward: 15,
    testCases: [
      { input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', expectedOutput: '[[2,4],[1,3],[2,4],[1,3]]', isHidden: false },
      { input: 'adjList = [[]]', expectedOutput: '[[]]', isHidden: false },
      { input: 'adjList = []', expectedOutput: '[]', isHidden: true }
    ],
    hints: [
      'Use DFS or BFS with hash map',
      'Map original nodes to cloned nodes',
      'Clone neighbors recursively'
    ],
    constraints: ['The number of nodes in the graph is in the range [0, 100]', '1 ≤ Node.val ≤ 100'],
    examples: [
      {
        input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]',
        output: '[[2,4],[1,3],[2,4],[1,3]]',
        explanation: 'Deep copy of the graph.'
      }
    ],
    starterCode: {
      javascript: `function cloneGraph(node) {
    // Your code here
    return null;
}`,
      python: `def cloneGraph(node):
    # Your code here
    return None`,
      cpp: `class Solution {
public:
    Node* cloneGraph(Node* node) {
        // Your code here
        return nullptr;
    }
};`,
      java: `class Solution {
    public Node cloneGraph(Node node) {
        // Your code here
        return null;
    }
}`
    },
    solved: false
  },
  {
    id: 'graph_4',
    title: 'Word Ladder',
    description: 'A transformation sequence from word beginWord to word endWord using a dictionary wordList.',
    difficulty: 'Hard',
    category: 'Graph',
    xpReward: 25,
    testCases: [
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', expectedOutput: '5', isHidden: false },
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', expectedOutput: '0', isHidden: false }
    ],
    hints: [
      'Use BFS for shortest path',
      'Build graph of word transformations',
      'Check one character difference'
    ],
    constraints: ['1 ≤ beginWord.length ≤ 10', 'endWord.length == beginWord.length'],
    examples: [
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: '5',
        explanation: 'One shortest transformation: "hit" -> "hot" -> "dot" -> "dog" -> "cog"'
      }
    ],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {
    // Your code here
    return 0;
}`,
      python: `def ladderLength(beginWord, endWord, wordList):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'graph_5',
    title: 'Alien Dictionary',
    description: 'There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.',
    difficulty: 'Hard',
    category: 'Graph',
    xpReward: 25,
    testCases: [
      { input: 'words = ["wrt","wrf","er","ett","rftt"]', expectedOutput: '"wertf"', isHidden: false },
      { input: 'words = ["z","x"]', expectedOutput: '"zx"', isHidden: false },
      { input: 'words = ["z","x","z"]', expectedOutput: '""', isHidden: true }
    ],
    hints: [
      'Build graph from word comparisons',
      'Use topological sorting',
      'Detect cycles for invalid order'
    ],
    constraints: ['1 ≤ words.length ≤ 100', '1 ≤ words[i].length ≤ 100'],
    examples: [
      {
        input: 'words = ["wrt","wrf","er","ett","rftt"]',
        output: '"wertf"',
        explanation: 'Derive alien alphabet order from given words.'
      }
    ],
    starterCode: {
      javascript: `function alienOrder(words) {
    // Your code here
    return "";
}`,
      python: `def alienOrder(words):
    # Your code here
    return ""`,
      cpp: `class Solution {
public:
    string alienOrder(vector<string>& words) {
        // Your code here
        return "";
    }
};`,
      java: `class Solution {
    public String alienOrder(String[] words) {
        // Your code here
        return "";
    }
}`
    },
    solved: false
  },
  {
    id: 'graph_6',
    title: 'Reconstruct Itinerary',
    description: 'You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight.',
    difficulty: 'Hard',
    category: 'Graph',
    xpReward: 25,
    testCases: [
      { input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]', expectedOutput: '["JFK","MUC","LHR","SFO","SJC"]', isHidden: false },
      { input: 'tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]', expectedOutput: '["JFK","ATL","JFK","SFO","ATL","SFO"]', isHidden: false }
    ],
    hints: [
      'Use Hierholzer\'s algorithm',
      'Build adjacency list with sorted destinations',
      'Find Eulerian path'
    ],
    constraints: ['1 ≤ tickets.length ≤ 300', 'tickets[i].length == 2'],
    examples: [
      {
        input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]',
        output: '["JFK","MUC","LHR","SFO","SJC"]',
        explanation: 'Reconstruct itinerary starting from JFK.'
      }
    ],
    starterCode: {
      javascript: `function findItinerary(tickets) {
    // Your code here
    return [];
}`,
      python: `def findItinerary(tickets):
    # Your code here
    return []`,
      cpp: `class Solution {
public:
    vector<string> findItinerary(vector<vector<string>>& tickets) {
        // Your code here
        return {};
    }
};`,
      java: `class Solution {
    public List<String> findItinerary(List<List<String>> tickets) {
        // Your code here
        return new ArrayList<>();
    }
}`
    },
    solved: false
  },
  {
    id: 'graph_7',
    title: 'Pacific Atlantic Water Flow',
    description: 'There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.',
    difficulty: 'Medium',
    category: 'Graph',
    xpReward: 15,
    testCases: [
      { input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]', expectedOutput: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]', isHidden: false }
    ],
    hints: [
      'DFS from ocean borders',
      'Mark cells reachable from each ocean',
      'Find intersection of both sets'
    ],
    constraints: ['m == heights.length', 'n == heights[r].length', '1 ≤ m, n ≤ 200'],
    examples: [
      {
        input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]',
        output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]',
        explanation: 'Cells where water can flow to both oceans.'
      }
    ],
    starterCode: {
      javascript: `function pacificAtlantic(heights) {
    // Your code here
    return [];
}`,
      python: `def pacificAtlantic(heights):
    # Your code here
    return []`,
      cpp: `class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        // Your code here
        return {};
    }
};`,
      java: `class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        // Your code here
        return new ArrayList<>();
    }
}`
    },
    solved: false
  },
  {
    id: 'graph_8',
    title: 'Redundant Connection',
    description: 'In this problem, a tree is an undirected graph that is connected and has no cycles.',
    difficulty: 'Medium',
    category: 'Graph',
    xpReward: 15,
    testCases: [
      { input: 'edges = [[1,2],[1,3],[2,3]]', expectedOutput: '[2,3]', isHidden: false },
      { input: 'edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]', expectedOutput: '[1,4]', isHidden: false }
    ],
    hints: [
      'Use Union-Find data structure',
      'Detect cycle formation',
      'Return edge that creates cycle'
    ],
    constraints: ['n == edges.length', '3 ≤ n ≤ 1000', 'edges[i].length == 2'],
    examples: [
      {
        input: 'edges = [[1,2],[1,3],[2,3]]',
        output: '[2,3]',
        explanation: 'Remove edge [2,3] to make it a tree.'
      }
    ],
    starterCode: {
      javascript: `function findRedundantConnection(edges) {
    // Your code here
    return [];
}`,
      python: `def findRedundantConnection(edges):
    # Your code here
    return []`,
      cpp: `class Solution {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        // Your code here
        return {};
    }
};`,
      java: `class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        // Your code here
        return new int[0];
    }
}`
    },
    solved: false
  },

  // TREE CATEGORY (10 problems)
  {
    id: 'tree_1',
    title: 'Maximum Depth of Binary Tree',
    description: 'Given the root of a binary tree, return its maximum depth.',
    difficulty: 'Easy',
    category: 'Tree',
    xpReward: 10,
    testCases: [
      { input: 'root = [3,9,20,null,null,15,7]', expectedOutput: '3', isHidden: false },
      { input: 'root = [1,null,2]', expectedOutput: '2', isHidden: false },
      { input: 'root = []', expectedOutput: '0', isHidden: true }
    ],
    hints: [
      'Use recursive DFS approach',
      'Return 1 + max depth of children',
      'Base case: null node has depth 0'
    ],
    constraints: ['The number of nodes in the tree is in the range [0, 10^4]', '-100 ≤ Node.val ≤ 100'],
    examples: [
      {
        input: 'root = [3,9,20,null,null,15,7]',
        output: '3',
        explanation: 'The maximum depth is 3.'
      }
    ],
    starterCode: {
      javascript: `function maxDepth(root) {
    // Your code here
    return 0;
}`,
      python: `def maxDepth(root):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int maxDepth(TreeNode* root) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int maxDepth(TreeNode root) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'tree_2',
    title: 'Same Tree',
    description: 'Given the roots of two binary trees p and q, write a function to check if they are the same or not.',
    difficulty: 'Easy',
    category: 'Tree',
    xpReward: 10,
    testCases: [
      { input: 'p = [1,2,3], q = [1,2,3]', expectedOutput: 'true', isHidden: false },
      { input: 'p = [1,2], q = [1,null,2]', expectedOutput: 'false', isHidden: false },
      { input: 'p = [1,2,1], q = [1,1,2]', expectedOutput: 'false', isHidden: true }
    ],
    hints: [
      'Compare nodes recursively',
      'Check values and structure',
      'Handle null cases'
    ],
    constraints: ['The number of nodes in both trees is in the range [0, 100]', '-10^4 ≤ Node.val ≤ 10^4'],
    examples: [
      {
        input: 'p = [1,2,3], q = [1,2,3]',
        output: 'true',
        explanation: 'Both trees have the same structure and values.'
      }
    ],
    starterCode: {
      javascript: `function isSameTree(p, q) {
    // Your code here
    return false;
}`,
      python: `def isSameTree(p, q):
    # Your code here
    return False`,
      cpp: `class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        // Your code here
        return false;
    }
};`,
      java: `class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // Your code here
        return false;
    }
}`
    },
    solved: false
  },
  {
    id: 'tree_3',
    title: 'Validate Binary Search Tree',
    description: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST).',
    difficulty: 'Medium',
    category: 'Tree',
    xpReward: 15,
    testCases: [
      { input: 'root = [2,1,3]', expectedOutput: 'true', isHidden: false },
      { input: 'root = [5,1,4,null,null,3,6]', expectedOutput: 'false', isHidden: false },
      { input: 'root = [1]', expectedOutput: 'true', isHidden: true }
    ],
    hints: [
      'Use inorder traversal for sorted check',
      'Or pass min/max bounds recursively',
      'All left subtree < root < all right subtree'
    ],
    constraints: ['The number of nodes in the tree is in the range [1, 10^4]', '-2^31 ≤ Node.val ≤ 2^31 - 1'],
    examples: [
      {
        input: 'root = [2,1,3]',
        output: 'true',
        explanation: 'Valid BST with root 2, left child 1, right child 3.'
      }
    ],
    starterCode: {
      javascript: `function isValidBST(root) {
    // Your code here
    return false;
}`,
      python: `def isValidBST(root):
    # Your code here
    return False`,
      cpp: `class Solution {
public:
    bool isValidBST(TreeNode* root) {
        // Your code here
        return false;
    }
};`,
      java: `class Solution {
    public boolean isValidBST(TreeNode root) {
        // Your code here
        return false;
    }
}`
    },
    solved: false
  },
  {
    id: 'tree_4',
    title: 'Symmetric Tree',
    description: 'Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).',
    difficulty: 'Easy',
    category: 'Tree',
    xpReward: 10,
    testCases: [
      { input: 'root = [1,2,2,3,4,4,3]', expectedOutput: 'true', isHidden: false },
      { input: 'root = [1,2,2,null,3,null,3]', expectedOutput: 'false', isHidden: false },
      { input: 'root = [1]', expectedOutput: 'true', isHidden: true }
    ],
    hints: [
      'Compare left and right subtrees',
      'Check if left.left == right.right',
      'And left.right == right.left'
    ],
    constraints: ['The number of nodes in the tree is in the range [1, 1000]', '-100 ≤ Node.val ≤ 100'],
    examples: [
      {
        input: 'root = [1,2,2,3,4,4,3]',
        output: 'true',
        explanation: 'Tree is symmetric around its center.'
      }
    ],
    starterCode: {
      javascript: `function isSymmetric(root) {
    // Your code here
    return false;
}`,
      python: `def isSymmetric(root):
    # Your code here
    return False`,
      cpp: `class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        // Your code here
        return false;
    }
};`,
      java: `class Solution {
    public boolean isSymmetric(TreeNode root) {
        // Your code here
        return false;
    }
}`
    },
    solved: false
  },
  {
    id: 'tree_5',
    title: 'Lowest Common Ancestor of a Binary Tree',
    description: 'Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.',
    difficulty: 'Medium',
    category: 'Tree',
    xpReward: 15,
    testCases: [
      { input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1', expectedOutput: '3', isHidden: false },
      { input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4', expectedOutput: '5', isHidden: false }
    ],
    hints: [
      'Use recursive approach',
      'If current node is p or q, return it',
      'LCA is where both subtrees return non-null'
    ],
    constraints: ['The number of nodes in the tree is in the range [2, 10^5]', '-10^9 ≤ Node.val ≤ 10^9'],
    examples: [
      {
        input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1',
        output: '3',
        explanation: 'The LCA of nodes 5 and 1 is 3.'
      }
    ],
    starterCode: {
      javascript: `function lowestCommonAncestor(root, p, q) {
    // Your code here
    return null;
}`,
      python: `def lowestCommonAncestor(root, p, q):
    # Your code here
    return None`,
      cpp: `class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        // Your code here
        return nullptr;
    }
};`,
      java: `class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Your code here
        return null;
    }
}`
    },
    solved: false
  },
  {
    id: 'tree_6',
    title: 'Serialize and Deserialize Binary Tree',
    description: 'Design an algorithm to serialize and deserialize a binary tree.',
    difficulty: 'Hard',
    category: 'Tree',
    xpReward: 25,
    testCases: [
      { input: 'root = [1,2,3,null,null,4,5]', expectedOutput: '[1,2,3,null,null,4,5]', isHidden: false },
      { input: 'root = []', expectedOutput: '[]', isHidden: false }
    ],
    hints: [
      'Use preorder traversal for serialization',
      'Handle null nodes explicitly',
      'Use queue for level-order approach'
    ],
    constraints: ['The number of nodes in the tree is in the range [0, 10^4]', '-1000 ≤ Node.val ≤ 1000'],
    examples: [
      {
        input: 'root = [1,2,3,null,null,4,5]',
        output: 'Serialized: "1,2,null,null,3,4,null,null,5,null,null"',
        explanation: 'Serialize tree to string and deserialize back.'
      }
    ],
    starterCode: {
      javascript: `function serialize(root) {
    // Your code here
    return "";
}

function deserialize(data) {
    // Your code here
    return null;
}`,
      python: `def serialize(root):
    # Your code here
    return ""

def deserialize(data):
    # Your code here
    return None`,
      cpp: `class Codec {
public:
    string serialize(TreeNode* root) {
        // Your code here
        return "";
    }

    TreeNode* deserialize(string data) {
        // Your code here
        return nullptr;
    }
};`,
      java: `public class Codec {
    public String serialize(TreeNode root) {
        // Your code here
        return "";
    }

    public TreeNode deserialize(String data) {
        // Your code here
        return null;
    }
}`
    },
    solved: false
  },
  {
    id: 'tree_7',
    title: 'Binary Tree Maximum Path Sum',
    description: 'A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.',
    difficulty: 'Hard',
    category: 'Tree',
    xpReward: 25,
    testCases: [
      { input: 'root = [1,2,3]', expectedOutput: '6', isHidden: false },
      { input: 'root = [-10,9,20,null,null,15,7]', expectedOutput: '42', isHidden: false }
    ],
    hints: [
      'Use post-order traversal',
      'Calculate max path through each node',
      'Consider node as path root vs part of parent path'
    ],
    constraints: ['The number of nodes in the tree is in the range [1, 3 * 10^4]', '-1000 ≤ Node.val ≤ 1000'],
    examples: [
      {
        input: 'root = [1,2,3]',
        output: '6',
        explanation: 'The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.'
      }
    ],
    starterCode: {
      javascript: `function maxPathSum(root) {
    // Your code here
    return 0;
}`,
      python: `def maxPathSum(root):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int maxPathSum(TreeNode* root) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int maxPathSum(TreeNode root) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'tree_8',
    title: 'Kth Smallest Element in a BST',
    description: 'Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.',
    difficulty: 'Medium',
    category: 'Tree',
    xpReward: 15,
    testCases: [
      { input: 'root = [3,1,4,null,2], k = 1', expectedOutput: '1', isHidden: false },
      { input: 'root = [5,3,6,2,4,null,null,1], k = 3', expectedOutput: '3', isHidden: false }
    ],
    hints: [
      'Use inorder traversal of BST',
      'Inorder gives sorted sequence',
      'Stop when k elements are processed'
    ],
    constraints: ['The number of nodes in the tree is n', '1 ≤ k ≤ n ≤ 10^4'],
    examples: [
      {
        input: 'root = [3,1,4,null,2], k = 1',
        output: '1',
        explanation: 'The 1st smallest element is 1.'
      }
    ],
    starterCode: {
      javascript: `function kthSmallest(root, k) {
    // Your code here
    return 0;
}`,
      python: `def kthSmallest(root, k):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int kthSmallest(TreeNode root, int k) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },

  // DYNAMIC PROGRAMMING CATEGORY (10 problems)
  {
    id: 'dp_1',
    title: 'Climbing Stairs',
    description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.',
    difficulty: 'Easy',
    category: 'Dynamic Programming',
    xpReward: 10,
    testCases: [
      { input: 'n = 2', expectedOutput: '2', isHidden: false },
      { input: 'n = 3', expectedOutput: '3', isHidden: false },
      { input: 'n = 1', expectedOutput: '1', isHidden: true }
    ],
    hints: [
      'This is a Fibonacci sequence problem',
      'dp[i] = dp[i-1] + dp[i-2]',
      'Base cases: dp[1] = 1, dp[2] = 2'
    ],
    constraints: ['1 ≤ n ≤ 45'],
    examples: [
      {
        input: 'n = 2',
        output: '2',
        explanation: 'There are two ways: 1. 1 step + 1 step 2. 2 steps'
      }
    ],
    starterCode: {
      javascript: `function climbStairs(n) {
    // Your code here
    return 0;
}`,
      python: `def climbStairs(n):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int climbStairs(int n) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int climbStairs(int n) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'dp_2',
    title: 'Longest Increasing Subsequence',
    description: 'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    xpReward: 15,
    testCases: [
      { input: '[10,9,2,5,3,7,101,18]', expectedOutput: '4', isHidden: false },
      { input: '[0,1,0,3,2,3]', expectedOutput: '4', isHidden: false },
      { input: '[7,7,7,7,7,7,7]', expectedOutput: '1', isHidden: true }
    ],
    hints: [
      'Use DP: dp[i] = max length ending at i',
      'For each i, check all j < i where nums[j] < nums[i]',
      'Can optimize with binary search'
    ],
    constraints: ['1 ≤ nums.length ≤ 2500', '-10^4 ≤ nums[i] ≤ 10^4'],
    examples: [
      {
        input: 'nums = [10,9,2,5,3,7,101,18]',
        output: '4',
        explanation: 'The longest increasing subsequence is [2,3,7,18], therefore the length is 4.'
      }
    ],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {
    // Your code here
    return 0;
}`,
      python: `def lengthOfLIS(nums):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int lengthOfLIS(int[] nums) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'dp_3',
    title: 'Coin Change',
    description: 'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    xpReward: 15,
    testCases: [
      { input: 'coins = [1,3,4], amount = 6', expectedOutput: '2', isHidden: false },
      { input: 'coins = [2], amount = 3', expectedOutput: '-1', isHidden: false },
      { input: 'coins = [1], amount = 0', expectedOutput: '0', isHidden: true }
    ],
    hints: [
      'Use DP: dp[i] = min coins to make amount i',
      'For each amount, try all coins',
      'dp[amount] = min(dp[amount - coin] + 1)'
    ],
    constraints: ['1 ≤ coins.length ≤ 12', '1 ≤ coins[i] ≤ 2^31 - 1', '0 ≤ amount ≤ 10^4'],
    examples: [
      {
        input: 'coins = [1,3,4], amount = 6',
        output: '2',
        explanation: 'The minimum number of coins is 2 (3 + 3 = 6).'
      }
    ],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
    // Your code here
    return -1;
}`,
      python: `def coinChange(coins, amount):
    # Your code here
    return -1`,
      cpp: `class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        // Your code here
        return -1;
    }
};`,
      java: `class Solution {
    public int coinChange(int[] coins, int amount) {
        // Your code here
        return -1;
    }
}`
    },
    solved: false
  },
  {
    id: 'dp_4',
    title: 'Word Break',
    description: 'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    xpReward: 15,
    testCases: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', expectedOutput: 'true', isHidden: false },
      { input: 's = "applepenapple", wordDict = ["apple","pen"]', expectedOutput: 'true', isHidden: false },
      { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', expectedOutput: 'false', isHidden: true }
    ],
    hints: [
      'Use DP: dp[i] = can break s[0:i]',
      'For each position, check all possible words ending there',
      'dp[i] = dp[j] && s[j:i] in wordDict'
    ],
    constraints: ['1 ≤ s.length ≤ 300', '1 ≤ wordDict.length ≤ 1000', '1 ≤ wordDict[i].length ≤ 20'],
    examples: [
      {
        input: 's = "leetcode", wordDict = ["leet","code"]',
        output: 'true',
        explanation: 'Return true because "leetcode" can be segmented as "leet code".'
      }
    ],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {
    // Your code here
    return false;
}`,
      python: `def wordBreak(s, wordDict):
    # Your code here
    return False`,
      cpp: `class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        // Your code here
        return false;
    }
};`,
      java: `class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        // Your code here
        return false;
    }
}`
    },
    solved: false
  },
  {
    id: 'dp_5',
    title: 'House Robber',
    description: 'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed.',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    xpReward: 15,
    testCases: [
      { input: '[1,2,3,1]', expectedOutput: '4', isHidden: false },
      { input: '[2,7,9,3,1]', expectedOutput: '12', isHidden: false },
      { input: '[2,1,1,2]', expectedOutput: '4', isHidden: true }
    ],
    hints: [
      'Cannot rob adjacent houses',
      'dp[i] = max(dp[i-1], dp[i-2] + nums[i])',
      'Choose between robbing current house or not'
    ],
    constraints: ['1 ≤ nums.length ≤ 100', '0 ≤ nums[i] ≤ 400'],
    examples: [
      {
        input: 'nums = [1,2,3,1]',
        output: '4',
        explanation: 'Rob house 0 (money = 1) and then rob house 2 (money = 3). Total = 1 + 3 = 4.'
      }
    ],
    starterCode: {
      javascript: `function rob(nums) {
    // Your code here
    return 0;
}`,
      python: `def rob(nums):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int rob(vector<int>& nums) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int rob(int[] nums) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'dp_6',
    title: 'Maximum Subarray',
    description: 'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    xpReward: 15,
    testCases: [
      { input: '[-2,1,-3,4,-1,2,1,-5,4]', expectedOutput: '6', isHidden: false },
      { input: '[1]', expectedOutput: '1', isHidden: false },
      { input: '[5,4,-1,7,8]', expectedOutput: '23', isHidden: true }
    ],
    hints: [
      'Use Kadane\'s algorithm',
      'Keep track of current sum and max sum',
      'Reset current sum when it becomes negative'
    ],
    constraints: ['1 ≤ nums.length ≤ 10^5', '-10^4 ≤ nums[i] ≤ 10^4'],
    examples: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: '[4,-1,2,1] has the largest sum = 6.'
      }
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {
    // Your code here
    return 0;
}`,
      python: `def maxSubArray(nums):
    # Your code here
    return 0`,
      cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Your code here
        return 0;
    }
};`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Your code here
        return 0;
    }
}`
    },
    solved: false
  },
  {
    id: 'dp_7',
    title: 'Partition Equal Subset Sum',
    description: 'Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.',
    difficulty: 'Medium',
    category: 'Dynamic Programming',
    xpReward: 15,
    testCases: [
      { input: '[1,5,11,5]', expectedOutput: 'true', isHidden: false },
      { input: '[1,2,3,5]', expectedOutput: 'false', isHidden: false },
      { input: '[1,1]', expectedOutput: 'true', isHidden: true }
    ],
    hints: [
      'This is 0/1 knapsack problem',
      'Target sum = total sum / 2',
      'dp[i][j] = can make sum j using first i elements'
    ],
    constraints: ['1 ≤ nums.length ≤ 200', '1 ≤ nums[i] ≤ 100'],
    examples: [
      {
        input: 'nums = [1,5,11,5]',
        output: 'true',
        explanation: 'The array can be partitioned as [1, 5, 5] and [11].'
      }
    ],
    starterCode: {
      javascript: `function canPartition(nums) {
    // Your code here
    return false;
}`,
      python: `def canPartition(nums):
    # Your code here
    return False`,
      cpp: `class Solution {
public:
    bool canPartition(vector<int>& nums) {
        // Your code here
        return false;
    }
};`,
      java: `class Solution {
    public boolean canPartition(int[] nums) {
        // Your code here
        return false;
    }
}`
    },
    solved: false
  }
];