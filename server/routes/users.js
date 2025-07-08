import express from 'express';

const router = express.Router();

// Mock leaderboard data
const mockLeaderboard = [
  { rank: 1, username: 'CodeMaster', xp: 2540, level: 25, solvedProblems: 87, avatar: '🏆' },
  { rank: 2, username: 'AlgoWizard', xp: 2340, level: 23, solvedProblems: 79, avatar: '🧙‍♂️' },
  { rank: 3, username: 'ByteNinja', xp: 2120, level: 21, solvedProblems: 71, avatar: '🥷' },
  { rank: 4, username: 'DataDragon', xp: 1980, level: 19, solvedProblems: 66, avatar: '🐉' },
  { rank: 5, username: 'LogicLord', xp: 1850, level: 18, solvedProblems: 62, avatar: '👑' },
  { rank: 6, username: 'CodeCrusher', xp: 1720, level: 17, solvedProblems: 58, avatar: '💪' },
  { rank: 7, username: 'BugHunter', xp: 1590, level: 15, solvedProblems: 53, avatar: '🔍' },
  { rank: 8, username: 'SyntaxSage', xp: 1460, level: 14, solvedProblems: 49, avatar: '🧠' },
  { rank: 9, username: 'ArrayAce', xp: 1330, level: 13, solvedProblems: 45, avatar: '🎯' },
  { rank: 10, username: 'LoopLegend', xp: 1200, level: 12, solvedProblems: 41, avatar: '🔄' },
];

// Get leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const { type = 'global', limit = 10 } = req.query;
    
    let leaderboard = [...mockLeaderboard];
    
    if (type === 'weekly') {
      // Mock weekly leaderboard with different data
      leaderboard = [
        { rank: 1, username: 'SpeedyCoder', xp: 320, level: 8, solvedProblems: 12, avatar: '⚡' },
        { rank: 2, username: 'QuickSolver', xp: 290, level: 7, solvedProblems: 11, avatar: '🚀' },
        { rank: 3, username: 'FastTrack', xp: 265, level: 6, solvedProblems: 10, avatar: '🏃‍♂️' },
      ];
    }
    
    res.json(leaderboard.slice(0, parseInt(limit)));
  } catch (error) {
    console.error('Get leaderboard error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user profile
router.get('/profile/:id', async (req, res) => {
  try {
    // Mock user profile data
    const userProfile = {
      id: req.params.id,
      username: 'DemoUser',
      email: 'demo@example.com',
      xp: 650,
      level: 7,
      solvedProblems: [
        { id: '1', title: 'Two Sum', difficulty: 'Easy', solvedAt: '2024-01-15' },
        { id: '2', title: 'Palindrome Number', difficulty: 'Easy', solvedAt: '2024-01-14' }
      ],
      badges: [
        { name: 'First Steps', description: 'Solved your first problem', earned: true },
        { name: 'Speed Demon', description: 'Solved 10 problems in one day', earned: false }
      ],
      streak: 5,
      stats: {
        totalSubmissions: 45,
        acceptedSubmissions: 32,
        battleWins: 8,
        battleLosses: 3
      }
    };
    
    res.json(userProfile);
  } catch (error) {
    console.error('Get user profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/profile', async (req, res) => {
  try {
    const { username, email } = req.body;
    
    // Mock profile update
    const updatedProfile = {
      id: req.user.userId,
      username: username || 'DemoUser',
      email: email || 'demo@example.com',
      message: 'Profile updated successfully'
    };
    
    res.json(updatedProfile);
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user stats
router.get('/stats', async (req, res) => {
  try {
    const stats = {
      totalUsers: 1234,
      activeUsers: 567,
      totalProblems: 89,
      totalSubmissions: 12456,
      dailyActiveUsers: 123,
      weeklyActiveUsers: 456
    };
    
    res.json(stats);
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;