import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, Zap, TrendingUp, Calendar } from 'lucide-react';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('global');

  // Mock leaderboard data
  const globalLeaders = [
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

  const weeklyLeaders = [
    { rank: 1, username: 'SpeedyCoder', xp: 320, level: 8, solvedProblems: 12, avatar: '⚡' },
    { rank: 2, username: 'QuickSolver', xp: 290, level: 7, solvedProblems: 11, avatar: '🚀' },
    { rank: 3, username: 'FastTrack', xp: 265, level: 6, solvedProblems: 10, avatar: '🏃‍♂️' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-400">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-500/40';
      case 2:
        return 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 border-gray-500/40';
      case 3:
        return 'bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-amber-600/40';
      default:
        return 'bg-white/5 border-purple-500/20';
    }
  };

  const currentLeaders = activeTab === 'global' ? globalLeaders : weeklyLeaders;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Leaderboard
        </h1>
        <p className="text-gray-400 text-lg">
          See how you rank against other developers
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center mb-8"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-purple-500/20">
          <button
            onClick={() => setActiveTab('global')}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              activeTab === 'global'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Global</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('weekly')}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              activeTab === 'weekly'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>This Week</span>
            </div>
          </button>
        </div>
      </motion.div>

      {/* Leaderboard */}
      <div className="space-y-4">
        {currentLeaders.map((leader, index) => (
          <motion.div
            key={leader.username}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${getRankBg(leader.rank)}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12">
                  {getRankIcon(leader.rank)}
                </div>
                
                <div className="text-3xl">{leader.avatar}</div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white">{leader.username}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>Level {leader.level}</span>
                    <span>•</span>
                    <span>{leader.solvedProblems} problems solved</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center space-x-2 text-yellow-400 mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xl font-bold">{leader.xp}</span>
                </div>
                <div className="text-sm text-gray-400">XP</div>
              </div>
            </div>

            {/* Progress Bar for Top 3 */}
            {leader.rank <= 3 && (
              <div className="mt-4">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${(leader.xp / (currentLeaders[0]?.xp || 1)) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Your Rank Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/40"
      >
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-2">Your Current Rank</h3>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-3xl">#42</div>
            <div className="text-left">
              <div className="flex items-center space-x-2 text-yellow-400">
                <Zap className="w-4 h-4" />
                <span className="text-lg font-bold">650 XP</span>
              </div>
              <div className="text-sm text-gray-400">Keep climbing!</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Leaderboard;