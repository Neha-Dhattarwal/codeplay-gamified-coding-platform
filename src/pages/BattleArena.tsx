import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sword, Users, Clock, Trophy, Zap, Target, Crown } from 'lucide-react';

const BattleArena = () => {
  const [gameState, setGameState] = useState<'lobby' | 'searching' | 'battle' | 'completed'>('lobby');
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(0);

  const challenges = [
    {
      type: 'mcq',
      question: 'What is the time complexity of binary search?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      correct: 1,
    },
    {
      type: 'mcq',
      question: 'Which data structure uses FIFO principle?',
      options: ['Stack', 'Queue', 'Array', 'Tree'],
      correct: 1,
    },
    {
      type: 'coding',
      title: 'Two Sum',
      description: 'Given an array of integers, return indices of two numbers that add up to target.',
      difficulty: 'Easy',
    }
  ];

  useEffect(() => {
    if (gameState === 'battle' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameState === 'battle') {
      setGameState('completed');
    }
  }, [timeLeft, gameState]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const startMatchmaking = () => {
    setGameState('searching');
    // Simulate finding opponent
    setTimeout(() => {
      setGameState('battle');
      setTimeLeft(900);
    }, 3000);
  };

  const handleAnswer = (answerIndex: number) => {
    const isCorrect = answerIndex === challenges[currentChallenge].correct;
    if (isCorrect) {
      setPlayerScore(playerScore + 10);
    }
    
    // Simulate opponent answering
    const opponentCorrect = Math.random() > 0.3;
    if (opponentCorrect) {
      setOpponentScore(opponentScore + 10);
    }

    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(currentChallenge + 1);
    }
  };

  if (gameState === 'lobby') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sword className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">Battle Arena</h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Face off against another developer in real-time coding battles. Answer MCQs and solve problems faster than your opponent to claim victory!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">15 Minutes</h3>
              <p className="text-gray-400 text-sm">Battle duration</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">50 XP</h3>
              <p className="text-gray-400 text-sm">Winner reward</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Mixed</h3>
              <p className="text-gray-400 text-sm">MCQ + Coding</p>
            </div>
          </div>

          <button
            onClick={startMatchmaking}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
          >
            Start Battle
          </button>
        </motion.div>
      </div>
    );
  }

  if (gameState === 'searching') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-3xl font-bold text-white mb-4">Finding Opponent...</h1>
          <p className="text-gray-400 text-lg mb-8">
            Searching for a worthy adversary to battle against
          </p>
          
          <div className="flex justify-center">
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-purple-500 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (gameState === 'completed') {
    const playerWon = playerScore > opponentScore;
    
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
            playerWon ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-gray-500 to-gray-600'
          }`}>
            {playerWon ? <Crown className="w-10 h-10 text-white" /> : <Trophy className="w-10 h-10 text-white" />}
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">
            {playerWon ? 'Victory!' : 'Defeat'}
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            {playerWon ? 'Congratulations! You won the battle!' : 'Good effort! Better luck next time!'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">Your Score</h3>
              <div className="text-3xl font-bold text-blue-400">{playerScore}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-semibold text-white mb-2">Opponent Score</h3>
              <div className="text-3xl font-bold text-red-400">{opponentScore}</div>
            </div>
          </div>

          {playerWon && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 text-yellow-400">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">+50 XP Earned!</span>
              </div>
            </div>
          )}

          <button
            onClick={() => {
              setGameState('lobby');
              setPlayerScore(0);
              setOpponentScore(0);
              setCurrentChallenge(0);
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
          >
            Battle Again
          </button>
        </motion.div>
      </div>
    );
  }

  // Battle State
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Battle Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 mb-8"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Sword className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Live Battle</h1>
              <p className="text-gray-400">Challenge {currentChallenge + 1} of {challenges.length}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-red-400">
            <Clock className="w-5 h-5" />
            <span className="font-mono font-bold text-xl">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Player Stats */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">You</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Your Score</h3>
            <div className="text-3xl font-bold text-blue-400 mb-4">{playerScore}</div>
            <div className="text-sm text-gray-400">Keep it up!</div>
          </div>
        </div>

        {/* Current Challenge */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          {challenges[currentChallenge].type === 'mcq' ? (
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {challenges[currentChallenge].question}
              </h3>
              <div className="space-y-3">
                {challenges[currentChallenge].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full text-left p-3 rounded-lg border border-gray-600 hover:border-purple-500 hover:bg-purple-500/10 text-gray-300 transition-all duration-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {challenges[currentChallenge].title}
              </h3>
              <p className="text-gray-400 mb-4">
                {challenges[currentChallenge].description}
              </p>
              <div className="text-center">
                <div className="text-sm text-gray-500">Coding challenge interface would go here</div>
              </div>
            </div>
          )}
        </div>

        {/* Opponent Stats */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Opponent Score</h3>
            <div className="text-3xl font-bold text-red-400 mb-4">{opponentScore}</div>
            <div className="text-sm text-gray-400">CodeBot</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleArena;