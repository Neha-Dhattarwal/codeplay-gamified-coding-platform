import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Trophy, 
  Zap, 
  Target, 
  Calendar, 
  TrendingUp,
  Star,
  Award,
  Clock,
  Users,
  BookOpen,
  Play
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Dashboard = () => {
  const { user } = useAuthStore();

  const stats = [
    { label: 'Problems Solved', value: user?.solvedProblems?.length || 0, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { label: 'Current XP', value: user?.xp || 0, icon: Zap, color: 'from-purple-500 to-pink-500' },
    { label: 'Current Level', value: user?.level || 1, icon: Trophy, color: 'from-yellow-500 to-orange-500' },
    { label: 'Streak Days', value: user?.streak || 0, icon: Calendar, color: 'from-green-500 to-emerald-500' },
  ];

  const quickActions = [
    { 
      title: 'Daily Challenge', 
      description: 'Solve today\'s problem', 
      icon: Target, 
      link: '/problems', 
      color: 'from-red-500 to-pink-500' 
    },
    { 
      title: 'Practice Problems', 
      description: 'Browse coding problems', 
      icon: Code, 
      link: '/problems', 
      color: 'from-blue-500 to-purple-500' 
    },
    { 
      title: 'Battle Arena', 
      description: 'Challenge other players', 
      icon: Users, 
      link: '/battle', 
      color: 'from-orange-500 to-red-500' 
    },
    { 
      title: 'Game Modes', 
      description: 'Try different challenges', 
      icon: Trophy, 
      link: '/game-modes', 
      color: 'from-green-500 to-teal-500' 
    },
  ];

  // Generate activity based on user data
  const generateRecentActivity = () => {
    const activities = [];
    
    if (user?.solvedProblems && user.solvedProblems.length > 0) {
      // Show solved problems
      user.solvedProblems.slice(0, 3).forEach((problemId, index) => {
        const problemTitles = ['Two Sum', 'Palindrome Number', 'Valid Parentheses'];
        activities.push({
          type: 'solved',
          problem: problemTitles[index] || `Problem ${problemId}`,
          xp: 10,
          time: `${index + 1} day${index > 0 ? 's' : ''} ago`
        });
      });
    }

    if (user?.level && user.level > 1) {
      activities.push({
        type: 'leveled',
        level: user.level,
        time: '2 days ago'
      });
    }

    if (user?.badges && user.badges.length > 0) {
      activities.push({
        type: 'badge',
        badge: user.badges[0],
        time: '3 days ago'
      });
    }

    // If no activities, show welcome activities
    if (activities.length === 0) {
      activities.push(
        {
          type: 'welcome',
          message: 'Welcome to CodePlay!',
          time: 'Just now'
        },
        {
          type: 'suggestion',
          message: 'Try solving your first problem',
          time: 'Get started'
        },
        {
          type: 'suggestion',
          message: 'Take the MCQ quiz to earn XP',
          time: 'Quick win'
        }
      );
    }

    return activities;
  };

  const recentActivity = generateRecentActivity();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Welcome back, {user?.username}! 🎮
        </h1>
        <p className="text-gray-400 text-lg">
          {user?.solvedProblems?.length === 0 
            ? "Ready to start your coding adventure? Let's solve your first problem!"
            : "Ready to level up your coding skills today?"
          }
        </p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 mb-8"
          >
            <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={action.title}
                  to={action.link}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white/5 rounded-lg p-4 border border-gray-600 hover:border-purple-500/50 transition-all duration-200 group-hover:bg-white/10"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-sm text-gray-400">{action.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          >
            <h2 className="text-xl font-bold text-white mb-6">Level Progress</h2>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Level {user?.level}</span>
                <span className="text-gray-400">Level {(user?.level || 1) + 1}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((user?.xp || 0) % 100)}%` }}
                />
              </div>
              <div className="text-center mt-2 text-sm text-gray-400">
                {user?.xp || 0} / {((user?.level || 1) * 100)} XP
              </div>
            </div>

            {/* Getting Started Tips for New Users */}
            {(user?.xp || 0) === 0 && (
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <h3 className="text-blue-400 font-semibold mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Getting Started Tips
                </h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Solve your first problem to earn 10 XP</li>
                  <li>• Take the MCQ quiz for quick points</li>
                  <li>• Join the battle arena for competitive fun</li>
                  <li>• Level up to unlock new features</li>
                </ul>
              </div>
            )}
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
        >
          <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  {activity.type === 'solved' && <Code className="w-4 h-4 text-white" />}
                  {activity.type === 'leveled' && <Trophy className="w-4 h-4 text-white" />}
                  {activity.type === 'badge' && <Award className="w-4 h-4 text-white" />}
                  {activity.type === 'welcome' && <Star className="w-4 h-4 text-white" />}
                  {activity.type === 'suggestion' && <Play className="w-4 h-4 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white">
                    {activity.type === 'solved' && `Solved "${activity.problem}"`}
                    {activity.type === 'leveled' && `Reached Level ${activity.level}`}
                    {activity.type === 'badge' && `Earned "${activity.badge}" badge`}
                    {activity.type === 'welcome' && activity.message}
                    {activity.type === 'suggestion' && activity.message}
                  </div>
                  <div className="text-xs text-gray-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.time}
                  </div>
                </div>
                {activity.type === 'solved' && (
                  <div className="text-xs text-yellow-400 font-medium">
                    +{activity.xp} XP
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;