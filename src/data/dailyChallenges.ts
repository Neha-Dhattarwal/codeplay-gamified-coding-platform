export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeLimit: number;
  xpReward: number;
  category: string;
  examples: Array<{
    input: string;
    output: string;
    explanation: string;
  }>;
  constraints: string[];
  hints: string[];
}

export const dailyChallenges = {
  Easy: [
    {
      id: 'easy_1',
      title: 'Find Maximum Element',
      description: 'Given an array of integers, find and return the maximum element.',
      difficulty: 'Easy' as const,
      timeLimit: 10,
      xpReward: 10,
      category: 'Array',
      examples: [
        {
          input: '[3, 1, 4, 1, 5, 9, 2, 6]',
          output: '9',
          explanation: '9 is the largest number in the array'
        }
      ],
      constraints: ['1 ≤ array length ≤ 1000', '-1000 ≤ elements ≤ 1000'],
      hints: ['Iterate through the array', 'Keep track of the maximum value seen so far']
    },
    {
      id: 'easy_2',
      title: 'Count Vowels',
      description: 'Count the number of vowels (a, e, i, o, u) in a given string.',
      difficulty: 'Easy' as const,
      timeLimit: 10,
      xpReward: 10,
      category: 'String',
      examples: [
        {
          input: '"hello world"',
          output: '3',
          explanation: 'The vowels are: e, o, o'
        }
      ],
      constraints: ['1 ≤ string length ≤ 1000', 'String contains only lowercase letters and spaces'],
      hints: ['Check each character', 'Use a set or array to store vowels']
    },
    {
      id: 'easy_3',
      title: 'Sum of Digits',
      description: 'Calculate the sum of all digits in a given positive integer.',
      difficulty: 'Easy' as const,
      timeLimit: 10,
      xpReward: 10,
      category: 'Math',
      examples: [
        {
          input: '1234',
          output: '10',
          explanation: '1 + 2 + 3 + 4 = 10'
        }
      ],
      constraints: ['1 ≤ number ≤ 10^9'],
      hints: ['Extract digits using modulo operation', 'Use integer division to remove processed digits']
    },
    {
      id: 'easy_4',
      title: 'Reverse String',
      description: 'Reverse a given string without using built-in reverse functions.',
      difficulty: 'Easy' as const,
      timeLimit: 10,
      xpReward: 10,
      category: 'String',
      examples: [
        {
          input: '"hello"',
          output: '"olleh"',
          explanation: 'Each character is placed in reverse order'
        }
      ],
      constraints: ['1 ≤ string length ≤ 1000'],
      hints: ['Use two pointers approach', 'Swap characters from both ends']
    },
    {
      id: 'easy_5',
      title: 'Check Prime',
      description: 'Determine if a given number is prime.',
      difficulty: 'Easy' as const,
      timeLimit: 10,
      xpReward: 10,
      category: 'Math',
      examples: [
        {
          input: '17',
          output: 'true',
          explanation: '17 is only divisible by 1 and itself'
        }
      ],
      constraints: ['2 ≤ number ≤ 10^6'],
      hints: ['Check divisibility up to square root', 'Handle edge cases for 2 and even numbers']
    },
    {
      id: 'easy_6',
      title: 'Find Missing Number',
      description: 'Find the missing number in an array containing n-1 unique numbers from 1 to n.',
      difficulty: 'Easy' as const,
      timeLimit: 15,
      xpReward: 12,
      category: 'Array',
      examples: [
        {
          input: '[1, 2, 4, 5]',
          output: '3',
          explanation: 'Numbers 1-5 should be present, 3 is missing'
        }
      ],
      constraints: ['1 ≤ n ≤ 10^4'],
      hints: ['Use sum formula: n*(n+1)/2', 'Subtract actual sum from expected sum']
    },
    {
      id: 'easy_7',
      title: 'Two Sum',
      description: 'Find two numbers in an array that add up to a target sum.',
      difficulty: 'Easy' as const,
      timeLimit: 15,
      xpReward: 12,
      category: 'Array',
      examples: [
        {
          input: '[2, 7, 11, 15], target = 9',
          output: '[0, 1]',
          explanation: 'nums[0] + nums[1] = 2 + 7 = 9'
        }
      ],
      constraints: ['2 ≤ array length ≤ 10^4', 'Exactly one solution exists'],
      hints: ['Use a hash map to store complements', 'Check if target - current exists']
    },
    {
      id: 'easy_8',
      title: 'Palindrome Check',
      description: 'Check if a given string is a palindrome (reads same forwards and backwards).',
      difficulty: 'Easy' as const,
      timeLimit: 10,
      xpReward: 10,
      category: 'String',
      examples: [
        {
          input: '"racecar"',
          output: 'true',
          explanation: 'The string reads the same forwards and backwards'
        }
      ],
      constraints: ['1 ≤ string length ≤ 1000'],
      hints: ['Compare characters from both ends', 'Use two pointers approach']
    },
    {
      id: 'easy_9',
      title: 'Fibonacci Number',
      description: 'Calculate the nth Fibonacci number.',
      difficulty: 'Easy' as const,
      timeLimit: 15,
      xpReward: 12,
      category: 'Math',
      examples: [
        {
          input: '6',
          output: '8',
          explanation: 'F(6) = F(5) + F(4) = 5 + 3 = 8'
        }
      ],
      constraints: ['0 ≤ n ≤ 30'],
      hints: ['Use iterative approach for efficiency', 'F(0) = 0, F(1) = 1']
    },
    {
      id: 'easy_10',
      title: 'Remove Duplicates',
      description: 'Remove duplicate elements from a sorted array in-place.',
      difficulty: 'Easy' as const,
      timeLimit: 15,
      xpReward: 12,
      category: 'Array',
      examples: [
        {
          input: '[1, 1, 2, 2, 3]',
          output: '[1, 2, 3]',
          explanation: 'Duplicates removed, unique elements remain'
        }
      ],
      constraints: ['0 ≤ array length ≤ 3 * 10^4', 'Array is sorted'],
      hints: ['Use two pointers', 'Compare adjacent elements']
    }
  ],
  Medium: [
    {
      id: 'medium_1',
      title: 'Binary Tree Level Order',
      description: 'Traverse a binary tree level by level and return the result.',
      difficulty: 'Medium' as const,
      timeLimit: 25,
      xpReward: 15,
      category: 'Tree',
      examples: [
        {
          input: 'Tree: [3,9,20,null,null,15,7]',
          output: '[[3],[9,20],[15,7]]',
          explanation: 'Level 0: [3], Level 1: [9,20], Level 2: [15,7]'
        }
      ],
      constraints: ['0 ≤ number of nodes ≤ 2000'],
      hints: ['Use BFS with queue', 'Process nodes level by level']
    },
    {
      id: 'medium_2',
      title: 'Longest Substring',
      description: 'Find the length of the longest substring without repeating characters.',
      difficulty: 'Medium' as const,
      timeLimit: 25,
      xpReward: 15,
      category: 'String',
      examples: [
        {
          input: '"abcabcbb"',
          output: '3',
          explanation: 'The answer is "abc", with length 3'
        }
      ],
      constraints: ['0 ≤ string length ≤ 5 * 10^4'],
      hints: ['Use sliding window technique', 'Track characters with hash set']
    },
    {
      id: 'medium_3',
      title: 'Rotate Array',
      description: 'Rotate an array to the right by k steps.',
      difficulty: 'Medium' as const,
      timeLimit: 20,
      xpReward: 15,
      category: 'Array',
      examples: [
        {
          input: '[1,2,3,4,5,6,7], k = 3',
          output: '[5,6,7,1,2,3,4]',
          explanation: 'Array rotated 3 positions to the right'
        }
      ],
      constraints: ['1 ≤ array length ≤ 10^5', '0 ≤ k ≤ 10^5'],
      hints: ['Use reverse operations', 'k = k % array.length']
    },
    {
      id: 'medium_4',
      title: 'Valid Parentheses',
      description: 'Check if a string of parentheses is valid.',
      difficulty: 'Medium' as const,
      timeLimit: 20,
      xpReward: 15,
      category: 'Stack',
      examples: [
        {
          input: '"()[]{}"',
          output: 'true',
          explanation: 'All brackets are properly matched'
        }
      ],
      constraints: ['1 ≤ string length ≤ 10^4'],
      hints: ['Use stack data structure', 'Match opening and closing brackets']
    },
    {
      id: 'medium_5',
      title: 'Group Anagrams',
      description: 'Group strings that are anagrams of each other.',
      difficulty: 'Medium' as const,
      timeLimit: 25,
      xpReward: 15,
      category: 'String',
      examples: [
        {
          input: '["eat","tea","tan","ate","nat","bat"]',
          output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
          explanation: 'Strings grouped by their anagram patterns'
        }
      ],
      constraints: ['1 ≤ array length ≤ 10^4'],
      hints: ['Sort characters to find anagram key', 'Use hash map to group']
    },
    {
      id: 'medium_6',
      title: 'Product of Array Except Self',
      description: 'Return array where each element is product of all other elements.',
      difficulty: 'Medium' as const,
      timeLimit: 25,
      xpReward: 18,
      category: 'Array',
      examples: [
        {
          input: '[1,2,3,4]',
          output: '[24,12,8,6]',
          explanation: 'For index i, multiply all elements except nums[i]'
        }
      ],
      constraints: ['2 ≤ array length ≤ 10^5', 'Cannot use division'],
      hints: ['Use left and right products', 'Two-pass approach']
    },
    {
      id: 'medium_7',
      title: 'Find Peak Element',
      description: 'Find a peak element in an array (element greater than neighbors).',
      difficulty: 'Medium' as const,
      timeLimit: 20,
      xpReward: 15,
      category: 'Array',
      examples: [
        {
          input: '[1,2,3,1]',
          output: '2',
          explanation: 'Element 3 at index 2 is a peak'
        }
      ],
      constraints: ['1 ≤ array length ≤ 1000'],
      hints: ['Use binary search', 'Compare with neighbors']
    },
    {
      id: 'medium_8',
      title: 'Spiral Matrix',
      description: 'Return all elements of a matrix in spiral order.',
      difficulty: 'Medium' as const,
      timeLimit: 30,
      xpReward: 20,
      category: 'Matrix',
      examples: [
        {
          input: '[[1,2,3],[4,5,6],[7,8,9]]',
          output: '[1,2,3,6,9,8,7,4,5]',
          explanation: 'Elements traversed in spiral order'
        }
      ],
      constraints: ['1 ≤ matrix dimensions ≤ 10'],
      hints: ['Track boundaries', 'Move in four directions']
    },
    {
      id: 'medium_9',
      title: 'Container With Most Water',
      description: 'Find two lines that together with x-axis forms container holding most water.',
      difficulty: 'Medium' as const,
      timeLimit: 25,
      xpReward: 18,
      category: 'Array',
      examples: [
        {
          input: '[1,8,6,2,5,4,8,3,7]',
          output: '49',
          explanation: 'Lines at index 1 and 8 form largest container'
        }
      ],
      constraints: ['2 ≤ array length ≤ 10^5'],
      hints: ['Use two pointers', 'Move pointer with smaller height']
    },
    {
      id: 'medium_10',
      title: 'Merge Intervals',
      description: 'Merge all overlapping intervals.',
      difficulty: 'Medium' as const,
      timeLimit: 25,
      xpReward: 18,
      category: 'Array',
      examples: [
        {
          input: '[[1,3],[2,6],[8,10],[15,18]]',
          output: '[[1,6],[8,10],[15,18]]',
          explanation: 'Intervals [1,3] and [2,6] overlap and merge to [1,6]'
        }
      ],
      constraints: ['1 ≤ intervals length ≤ 10^4'],
      hints: ['Sort intervals by start time', 'Check for overlaps']
    }
  ],
  Hard: [
    {
      id: 'hard_1',
      title: 'Merge K Sorted Lists',
      description: 'Merge k sorted linked lists and return it as one sorted list.',
      difficulty: 'Hard' as const,
      timeLimit: 45,
      xpReward: 25,
      category: 'Linked List',
      examples: [
        {
          input: '[[1,4,5],[1,3,4],[2,6]]',
          output: '[1,1,2,3,4,4,5,6]',
          explanation: 'All lists merged into one sorted list'
        }
      ],
      constraints: ['0 ≤ k ≤ 10^4', '0 ≤ list length ≤ 500'],
      hints: ['Use divide and conquer', 'Merge pairs of lists']
    },
    {
      id: 'hard_2',
      title: 'Longest Valid Parentheses',
      description: 'Find the length of the longest valid parentheses substring.',
      difficulty: 'Hard' as const,
      timeLimit: 40,
      xpReward: 25,
      category: 'Dynamic Programming',
      examples: [
        {
          input: '"(()"',
          output: '2',
          explanation: 'The longest valid parentheses substring is "()"'
        }
      ],
      constraints: ['0 ≤ string length ≤ 3 * 10^4'],
      hints: ['Use dynamic programming', 'Track valid parentheses lengths']
    },
    {
      id: 'hard_3',
      title: 'Word Ladder',
      description: 'Find the shortest transformation sequence from beginWord to endWord.',
      difficulty: 'Hard' as const,
      timeLimit: 45,
      xpReward: 25,
      category: 'Graph',
      examples: [
        {
          input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
          output: '5',
          explanation: 'One shortest transformation: "hit" -> "hot" -> "dot" -> "dog" -> "cog"'
        }
      ],
      constraints: ['1 ≤ word length ≤ 10', '1 ≤ wordList length ≤ 5000'],
      hints: ['Use BFS for shortest path', 'Build graph of word transformations']
    },
    {
      id: 'hard_4',
      title: 'Median of Two Sorted Arrays',
      description: 'Find the median of two sorted arrays.',
      difficulty: 'Hard' as const,
      timeLimit: 40,
      xpReward: 25,
      category: 'Binary Search',
      examples: [
        {
          input: 'nums1 = [1,3], nums2 = [2]',
          output: '2.0',
          explanation: 'Merged array is [1,2,3], median is 2'
        }
      ],
      constraints: ['0 ≤ array lengths ≤ 1000', 'Time complexity must be O(log(m+n))'],
      hints: ['Use binary search', 'Find partition point']
    },
    {
      id: 'hard_5',
      title: 'Trapping Rain Water',
      description: 'Calculate how much water can be trapped after raining.',
      difficulty: 'Hard' as const,
      timeLimit: 35,
      xpReward: 25,
      category: 'Array',
      examples: [
        {
          input: '[0,1,0,2,1,0,1,3,2,1,2,1]',
          output: '6',
          explanation: 'Water trapped between the elevation bars'
        }
      ],
      constraints: ['0 ≤ array length ≤ 3 * 10^4'],
      hints: ['Use two pointers', 'Track max heights from both sides']
    },
    {
      id: 'hard_6',
      title: 'Sliding Window Maximum',
      description: 'Find the maximum element in each sliding window of size k.',
      difficulty: 'Hard' as const,
      timeLimit: 40,
      xpReward: 25,
      category: 'Array',
      examples: [
        {
          input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
          output: '[3,3,5,5,6,7]',
          explanation: 'Maximum in each window of size 3'
        }
      ],
      constraints: ['1 ≤ array length ≤ 10^5', '1 ≤ k ≤ array length'],
      hints: ['Use deque data structure', 'Maintain decreasing order']
    },
    {
      id: 'hard_7',
      title: 'Edit Distance',
      description: 'Find minimum operations to convert one string to another.',
      difficulty: 'Hard' as const,
      timeLimit: 45,
      xpReward: 25,
      category: 'Dynamic Programming',
      examples: [
        {
          input: 'word1 = "horse", word2 = "ros"',
          output: '3',
          explanation: 'horse -> rorse -> rose -> ros (3 operations)'
        }
      ],
      constraints: ['0 ≤ string lengths ≤ 500'],
      hints: ['Use 2D DP table', 'Consider insert, delete, replace operations']
    },
    {
      id: 'hard_8',
      title: 'Largest Rectangle in Histogram',
      description: 'Find the area of largest rectangle in histogram.',
      difficulty: 'Hard' as const,
      timeLimit: 40,
      xpReward: 25,
      category: 'Stack',
      examples: [
        {
          input: '[2,1,5,6,2,3]',
          output: '10',
          explanation: 'Largest rectangle has area 10 (heights 5,6 with width 2)'
        }
      ],
      constraints: ['1 ≤ array length ≤ 10^5'],
      hints: ['Use stack to track indices', 'Calculate area when height decreases']
    },
    {
      id: 'hard_9',
      title: 'Serialize and Deserialize Binary Tree',
      description: 'Design algorithm to serialize and deserialize a binary tree.',
      difficulty: 'Hard' as const,
      timeLimit: 45,
      xpReward: 25,
      category: 'Tree',
      examples: [
        {
          input: 'Tree: [1,2,3,null,null,4,5]',
          output: '"1,2,null,null,3,4,null,null,5,null,null"',
          explanation: 'Tree serialized to string and back to tree'
        }
      ],
      constraints: ['0 ≤ number of nodes ≤ 10^4'],
      hints: ['Use preorder traversal', 'Handle null nodes explicitly']
    },
    {
      id: 'hard_10',
      title: 'Regular Expression Matching',
      description: 'Implement regular expression matching with . and *.',
      difficulty: 'Hard' as const,
      timeLimit: 50,
      xpReward: 30,
      category: 'Dynamic Programming',
      examples: [
        {
          input: 's = "aa", p = "a*"',
          output: 'true',
          explanation: '"a*" means zero or more "a"s, which matches "aa"'
        }
      ],
      constraints: ['1 ≤ string lengths ≤ 20'],
      hints: ['Use 2D DP', 'Handle . and * patterns separately']
    }
  ]
};