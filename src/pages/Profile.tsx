import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Calendar, 
  Trophy, 
  Zap, 
  Target, 
  Award,
  Code,
  TrendingUp,
  Star,
  Clock,
  BookOpen,
  Play
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Profile = () => {
  const { user } = useAuthStore();

  if (!user) return null;

  const stats = [
    { label: 'Problems Solved', value: user.solvedProblems?.length || 0, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { label: 'Total XP', value: user.xp || 0, icon: Zap, color: 'from-purple-500 to-pink-500' },
    { label: 'Current Level', value: user.level || 1, icon: Trophy, color: 'from-yellow-500 to-orange-500' },
    { label: 'Streak Days', value: user.streak || 0, icon: Target, color: 'from-green-500 to-emerald-500' },
  ];

  const badges = [
    { name: 'Welcome', description: 'Joined CodePlay', icon: '🎯', earned: user.badges?.includes('Welcome') },
    { name: 'First Steps', description: 'Solved your first problem', icon: '⚡', earned: (user.solvedProblems?.length || 0) > 0 },
    { name: 'Consistency King', description: '7-day solving streak', icon: '👑', earned: (user.streak || 0) >= 7 },
    { name: 'Algorithm Master', description: 'Solved 10 problems', icon: '🧠', earned: (user.solvedProblems?.length || 0) >= 10 },
    { name: 'Quiz Master', description: 'Completed 5 MCQ quizzes', icon: '🧩', earned: false },
    { name: 'Battle Warrior', description: 'Won 3 battle arena matches', icon: '⚔️', earned: false },
  ];

  // Generate recent solutions based on user data
  const generateRecentSolutions = () => {
    if (!user.solvedProblems || user.solvedProblems.length === 0) {
      return [
        {
          id: 'welcome',
          title: 'Welcome to CodePlay!',
          difficulty: 'Info',
          solvedAt: 'Get started',
          language: 'Ready to code?',
          runtime: 'Solve your first problem',
          isWelcome: true
        }
      ];
    }

    const problemTitles = ['Two Sum', 'Palindrome Number', 'Valid Parentheses', 'Merge Two Lists', 'Maximum Subarray'];
    const languages = ['JavaScript', 'Python', 'C++', 'Java'];
    const difficulties = ['Easy', 'Medium', 'Hard'];

    return user.solvedProblems.slice(0, 5).map((problemId, index) => ({
      id: problemId,
      title: problemTitles[index] || `Problem ${problemId}`,
      difficulty: difficulties[index % 3],
      solvedAt: `${index + 1} day${index > 0 ? 's' : ''} ago`,
      language: languages[index % 4],
      runtime: `${Math.floor(Math.random() * 100) + 20}ms`,
      isWelcome: false
    }));
  };

  const recentSolutions = generateRecentSolutions();

  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 mb-8"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Avatar */}
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 mb-4">
              <Mail className="w-4 h-4" />
              <span>{user.email}</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-6 text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Joined {formatDate(user.createdAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Last active: {formatDate(user.lastLogin)}</span>
              </div>
            </div>

            {/* Level Progress */}
            <div className="max-w-md mx-auto md:mx-0">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Level {user.level}</span>
                <span className="text-sm text-gray-400">Level {user.level + 1}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(user.xp % 100)}%` }}
                />
              </div>
              <div className="text-center mt-2 text-sm text-gray-400">
                {user.xp} / {(user.level * 100)} XP
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              {stat.value > 0 && <TrendingUp className="w-5 h-5 text-green-400" />}
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span>Badges</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {badges.map((badge, index) => (
              <div
                key={badge.name}
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  badge.earned 
                    ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/40' 
                    : 'bg-gray-800/50 border-gray-600 opacity-50'
                }`}
              >
                <div className="text-2xl mb-2">{badge.icon}</div>
                <h3 className="font-semibold text-white mb-1">{badge.name}</h3>
                <p className="text-sm text-gray-400">{badge.description}</p>
                {badge.earned && (
                  <div className="mt-2 text-xs text-yellow-400 font-medium">✓ Earned</div>
                )}
              </div>
            ))}
          </div>

          {/* Getting Started for New Users */}
          {(user.solvedProblems?.length || 0) === 0 && (
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <h3 className="text-blue-400 font-semibold mb-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Start Earning Badges!
              </h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Solve your first problem to earn "First Steps"</li>
                <li>• Complete MCQ quizzes for quick points</li>
                <li>• Maintain a solving streak for consistency badges</li>
                <li>• Join battle arena for competitive badges</li>
              </ul>
            </div>
          )}
        </motion.div>

        {/* Recent Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <Code className="w-5 h-5" />
            <span>Recent Activity</span>
          </h2>
          
          <div className="space-y-4">
            {recentSolutions.map((solution) => (
              <div key={solution.id} className={`rounded-lg p-4 border ${
                solution.isWelcome 
                  ? 'bg-blue-500/10 border-blue-500/30' 
                  : 'bg-white/5 border-gray-600'
              }`}>
                {solution.isWelcome ? (
                  <div className="text-center">
                    <div className="text-2xl mb-2">🚀</div>
                    <h3 className="font-semibold text-blue-400 mb-2">{solution.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{solution.runtime}</p>
                    <div className="flex justify-center space-x-2">
                      <a href="/problems" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
                        <Play className="w-3 h-3 mr-1" />
                        Start Coding
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{solution.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        solution.difficulty === 'Easy' ? 'text-green-400 bg-green-500/20' :
                        solution.difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-500/20' :
                        'text-red-400 bg-red-500/20'
                      }`}>
                        {solution.difficulty}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span>{solution.language}</span>
                        <span>•</span>
                        <span>{solution.runtime}</span>
                      </div>
                      <span>{solution.solvedAt}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;