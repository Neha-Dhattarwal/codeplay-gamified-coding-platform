import express from 'express';

const router = express.Router();

// Mock quiz questions
const mockQuizQuestions = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    explanation: "Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity.",
    category: "Algorithms"
  },
  {
    id: 2,
    question: "Which data structure uses LIFO (Last In, First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    explanation: "Stack follows LIFO principle where the last element added is the first one to be removed.",
    category: "Data Structures"
  }
];

// Get quiz questions
router.get('/quiz/questions', async (req, res) => {
  try {
    const { category, difficulty, count = 10 } = req.query;
    
    let questions = [...mockQuizQuestions];
    
    if (category && category !== 'All') {
      questions = questions.filter(q => q.category === category);
    }
    
    // Shuffle and limit questions
    questions = questions.sort(() => 0.5 - Math.random()).slice(0, parseInt(count));
    
    res.json(questions);
  } catch (error) {
    console.error('Get quiz questions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit quiz answers
router.post('/quiz/submit', async (req, res) => {
  try {
    const { answers, timeSpent } = req.body;
    
    let score = 0;
    const results = [];
    
    answers.forEach((answer, index) => {
      const question = mockQuizQuestions[index];
      if (question && answer === question.correctAnswer) {
        score += 5;
        results.push({
          questionId: question.id,
          correct: true,
          explanation: question.explanation
        });
      } else {
        results.push({
          questionId: question.id,
          correct: false,
          explanation: question?.explanation || 'Question not found'
        });
      }
    });
    
    const xpEarned = score;
    
    res.json({
      score,
      xpEarned,
      results,
      timeSpent,
      totalQuestions: answers.length
    });
  } catch (error) {
    console.error('Submit quiz error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Battle Arena endpoints
router.post('/battle/join', async (req, res) => {
  try {
    // Mock battle matching
    const battleId = `battle_${Date.now()}`;
    
    // Simulate finding opponent after delay
    setTimeout(() => {
      res.json({
        battleId,
        opponent: {
          id: 'ai_opponent',
          username: 'CodeBot',
          level: 10
        },
        challenges: [
          {
            type: 'mcq',
            question: 'What is the time complexity of quicksort?',
            options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
            correct: 1
          }
        ]
      });
    }, 1000);
  } catch (error) {
    console.error('Join battle error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/battle/:battleId/answer', async (req, res) => {
  try {
    const { battleId } = req.params;
    const { challengeIndex, answer } = req.body;
    
    // Mock battle answer processing
    const correct = answer === 1; // Mock correct answer
    const points = correct ? 10 : 0;
    
    res.json({
      correct,
      points,
      opponentAnswered: true,
      opponentCorrect: Math.random() > 0.3
    });
  } catch (error) {
    console.error('Battle answer error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Flash cards
router.get('/flashcards', async (req, res) => {
  try {
    const flashcards = [
      {
        id: 1,
        code: 'console.log([1, 2, 3].map(x => x * 2));',
        options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', 'undefined'],
        correct: 1,
        explanation: 'The map method creates a new array with the results of calling a function for every array element.'
      }
    ];
    
    res.json(flashcards);
  } catch (error) {
    console.error('Get flashcards error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Daily challenges
router.get('/daily-challenges', async (req, res) => {
  try {
    const challenges = {
      easy: {
        id: 'daily_easy_1',
        title: 'Find Maximum',
        difficulty: 'Easy',
        xpReward: 10,
        timeLimit: 10
      },
      medium: {
        id: 'daily_medium_1',
        title: 'Binary Tree Traversal',
        difficulty: 'Medium',
        xpReward: 15,
        timeLimit: 25
      },
      hard: {
        id: 'daily_hard_1',
        title: 'Dynamic Programming',
        difficulty: 'Hard',
        xpReward: 20,
        timeLimit: 45
      }
    };
    
    res.json(challenges);
  } catch (error) {
    console.error('Get daily challenges error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;