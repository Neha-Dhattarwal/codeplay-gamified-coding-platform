import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Trophy, Star, CheckCircle, Lock } from 'lucide-react';
import { dailyChallenges, DailyChallenge } from '../data/dailyChallenges';

const DailyPractice = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Easy' | 'Medium' | 'Hard' | null>(null);
  const [challenges, setChallenges] = useState<Record<string, DailyChallenge>>({});

  useEffect(() => {
    // Generate random daily challenges
    const todayChallenges: Record<string, DailyChallenge> = {};
    
    Object.keys(dailyChallenges).forEach(difficulty => {
      const difficultyKey = difficulty as keyof typeof dailyChallenges;
      const challengeList = dailyChallenges[difficultyKey];
      const randomChallenge = challengeList[Math.floor(Math.random() * challengeList.length)];
      todayChallenges[difficulty] = { ...randomChallenge };
    });
    
    setChallenges(todayChallenges);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'from-green-500 to-emerald-500';
      case 'Medium':
        return 'from-yellow-500 to-orange-500';
      case 'Hard':
        return 'from-red-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getDifficultyTextColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400 bg-green-500/20';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'Hard':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const handleStartChallenge = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
    setSelectedDifficulty(difficulty);
    console.log(`Starting ${difficulty} challenge:`, challenges[difficulty]);
  };

  const handleCompleteChallenge = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
    setChallenges(prev => ({
      ...prev,
      [difficulty]: { ...prev[difficulty], completed: true }
    }));
    setSelectedDifficulty(null);
  };

  if (selectedDifficulty && challenges[selectedDifficulty]) {
    const challenge = challenges[selectedDifficulty];
    
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${getDifficultyColor(challenge.difficulty)} rounded-lg flex items-center justify-center`}>
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{challenge.title}</h1>
                <div className="flex items-center space-x-4 mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyTextColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                  <span className="text-gray-400 text-sm">{challenge.category}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setSelectedDifficulty(null)}
              className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:border-gray-500 hover:text-gray-300 transition-colors"
            >
              Back to Challenges
            </button>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Problem Description</h3>
            <p className="text-gray-300 leading-relaxed mb-4">{challenge.description}</p>
            
            {challenge.examples && challenge.examples.length > 0 && (
              <div className="mt-4">
                <h4 className="text-md font-semibold text-white mb-2">Examples:</h4>
                {challenge.examples.map((example, index) => (
                  <div key={index} className="bg-gray-800/50 rounded p-3 mb-2">
                    <div className="text-sm">
                      <span className="text-gray-400">Input:</span>
                      <code className="text-green-400 ml-2">{example.input}</code>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">Output:</span>
                      <code className="text-blue-400 ml-2">{example.output}</code>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{example.explanation}</div>
                  </div>
                ))}
              </div>
            )}
            
            {challenge.constraints && challenge.constraints.length > 0 && (
              <div className="mt-4">
                <h4 className="text-md font-semibold text-white mb-2">Constraints:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  {challenge.constraints.map((constraint, index) => (
                    <li key={index}>• {constraint}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-white">{challenge.timeLimit} min</div>
              <div className="text-sm text-gray-400">Time Limit</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-white">{challenge.xpReward} XP</div>
              <div className="text-sm text-gray-400">Reward</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <Calendar className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-lg font-bold text-white">Daily</div>
              <div className="text-sm text-gray-400">Challenge</div>
            </div>
          </div>

          {challenge.hints && challenge.hints.length > 0 && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
              <h4 className="text-yellow-400 font-semibold mb-2">💡 Hints:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {challenge.hints.map((hint, index) => (
                  <li key={index}>• {hint}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={() => handleCompleteChallenge(selectedDifficulty)}
              className={`px-8 py-3 bg-gradient-to-r ${getDifficultyColor(challenge.difficulty)} text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200`}
            >
              Start Coding Challenge
            </button>
            <p className="text-gray-400 text-sm mt-2">
              This will open the coding interface (Demo: Auto-complete)
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Daily DSA Practice
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Challenge yourself with daily data structure and algorithm problems. Each difficulty level offers a unique problem every day!
        </p>
      </motion.div>

      {/* Daily Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(challenges).map(([difficulty, challenge], index) => (
          <motion.div
            key={difficulty}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${getDifficultyColor(difficulty)} rounded-lg flex items-center justify-center`}>
                <Trophy className="w-6 h-6 text-white" />
              </div>
              {challenge.completed && (
                <CheckCircle className="w-6 h-6 text-green-400" />
              )}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{difficulty} Challenge</h3>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">{challenge.title}</h4>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{challenge.description}</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {challenge.timeLimit} minutes
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyTextColor(difficulty)}`}>
                  {difficulty}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{challenge.category}</span>
                <span className="text-yellow-400 font-medium">+{challenge.xpReward} XP</span>
              </div>
            </div>

            {challenge.completed ? (
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-green-400 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Completed!</span>
                </div>
                <p className="text-gray-400 text-sm">Come back tomorrow for a new challenge</p>
              </div>
            ) : (
              <button
                onClick={() => handleStartChallenge(difficulty as 'Easy' | 'Medium' | 'Hard')}
                className={`w-full py-3 bg-gradient-to-r ${getDifficultyColor(difficulty)} text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200`}
              >
                Start Challenge
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-500/30"
      >
        <h2 className="text-2xl font-bold text-white mb-4 text-center">How Daily Practice Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-green-400 font-bold text-lg">1</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Choose Difficulty</h3>
            <p className="text-gray-400 text-sm">Pick Easy, Medium, or Hard based on your skill level</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-yellow-400 font-bold text-lg">2</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Solve Daily</h3>
            <p className="text-gray-400 text-sm">Each difficulty has one unique problem per day</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-400 font-bold text-lg">3</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Earn Rewards</h3>
            <p className="text-gray-400 text-sm">Get XP and maintain your solving streak</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DailyPractice;