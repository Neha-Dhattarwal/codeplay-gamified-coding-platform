import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Sword, 
  Target, 
  Puzzle, 
  Bug, 
  Palette, 
  Database,
  Clock,
  Users,
  Trophy,
  Play
} from 'lucide-react';

const GameModes = () => {
  const gameModes = [
    {
      id: 'mcq-quiz',
      title: 'MCQ Quiz',
      description: 'Quick-fire multiple choice questions on programming concepts',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      duration: '10 minutes',
      points: '5 pts per correct answer',
      difficulty: 'Easy',
      link: '/quiz',
      available: true,
    },
    {
      id: 'flash-cards',
      title: 'Flash Cards',
      description: 'Code output prediction challenges with time pressure',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      duration: '1 minute per set',
      points: '7 pts per correct answer',
      difficulty: 'Medium',
      link: '/flash-cards',
      available: true,
    },
    {
      id: 'daily-practice',
      title: 'Daily DSA Practice',
      description: 'Structured daily challenges for consistent improvement',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      duration: '10-45 minutes',
      points: '10-20 pts per problem',
      difficulty: 'All Levels',
      link: '/daily-practice',
      available: true,
    },
    {
      id: 'battle-arena',
      title: 'Battle Arena',
      description: 'Real-time 1v1 coding battles with live opponents',
      icon: Sword,
      color: 'from-red-500 to-orange-500',
      duration: '15 minutes',
      points: '50 pts for winner',
      difficulty: 'Hard',
      link: '/battle',
      available: true,
    },
    {
      id: 'bug-hunter',
      title: 'Bug Hunter',
      description: 'Find and fix bugs in broken code snippets',
      icon: Bug,
      color: 'from-yellow-500 to-amber-500',
      duration: '5-10 minutes',
      points: '15 pts per fix',
      difficulty: 'Medium',
      link: '/bug-hunter',
      available: true,
    },
    {
      id: 'data-structure-builder',
      title: 'Data Structure Builder',
      description: 'Visual building and manipulation of data structures',
      icon: Puzzle,
      color: 'from-indigo-500 to-purple-500',
      duration: '15-20 minutes',
      points: '25 pts per completion',
      difficulty: 'Hard',
      link: '/ds-builder',
      available: false,
    },
    {
      id: 'web-debugger',
      title: 'Web Debugger',
      description: 'Fix broken HTML, CSS, and JavaScript in web pages',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      duration: '10-15 minutes',
      points: '20 pts per fix',
      difficulty: 'Medium',
      link: '/web-debugger',
      available: false,
    },
    {
      id: 'sql-mini-games',
      title: 'SQL Mini-Games',
      description: 'Interactive SQL challenges and query building games',
      icon: Database,
      color: 'from-teal-500 to-green-500',
      duration: '5-15 minutes',
      points: '10-30 pts per game',
      difficulty: 'Various',
      link: '/sql-games',
      available: false,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400 bg-green-500/20';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'Hard':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-blue-400 bg-blue-500/20';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Game Modes
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Choose your challenge! Each game mode offers a unique way to improve your coding skills and earn XP. Every game features randomized questions for endless practice.
        </p>
      </motion.div>

      {/* Game Modes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {gameModes.map((mode, index) => (
          <motion.div
            key={mode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group ${mode.available ? 'cursor-pointer' : 'cursor-not-allowed opacity-75'}`}
          >
            {mode.available ? (
              <Link to={mode.link} className="block">
                <GameModeCard mode={mode} />
              </Link>
            ) : (
              <GameModeCard mode={mode} />
            )}
            
            {!mode.available && (
              <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold bg-gray-700 px-4 py-2 rounded-lg">
                  Coming Soon
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-500/30"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">🎲 Randomized Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Brain className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Fresh Questions</h3>
            <p className="text-gray-400 text-sm">Every game session features different randomized questions</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Endless Practice</h3>
            <p className="text-gray-400 text-sm">Never run out of content with our large question pools</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Fair Competition</h3>
            <p className="text-gray-400 text-sm">Randomized content ensures fair and exciting battles</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Your Game Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
            <div className="text-gray-400">Games Played</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">8</div>
            <div className="text-gray-400">Games Won</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">340</div>
            <div className="text-gray-400">XP from Games</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">67%</div>
            <div className="text-gray-400">Win Rate</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const GameModeCard = ({ mode }: { mode: any }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400 bg-green-500/20';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'Hard':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-blue-400 bg-blue-500/20';
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group-hover:bg-white/10 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${mode.color} rounded-lg flex items-center justify-center`}>
          <mode.icon className="w-6 h-6 text-white" />
        </div>
        {mode.available && (
          <Play className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{mode.title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{mode.description}</p>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400 flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {mode.duration}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(mode.difficulty)}`}>
            {mode.difficulty}
          </span>
        </div>
        <div className="text-sm text-yellow-400 font-medium">
          {mode.points}
        </div>
      </div>
    </div>
  );
};

export default GameModes;