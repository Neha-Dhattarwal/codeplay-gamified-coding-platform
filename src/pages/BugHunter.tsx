import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bug, CheckCircle, XCircle, Clock, Trophy, RotateCcw, Code } from 'lucide-react';
import Editor from '@monaco-editor/react';
import { bugHunterChallenges, BugChallenge } from '../data/bugHunterChallenges';

const BugHunter = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [challenges, setChallenges] = useState<BugChallenge[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const languages = ['All', 'JavaScript', 'Python', 'C++', 'Java'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  useEffect(() => {
    // Filter and randomize challenges based on selected criteria
    let filteredChallenges = [...bugHunterChallenges];
    
    if (selectedLanguage !== 'All') {
      filteredChallenges = filteredChallenges.filter(challenge => challenge.language === selectedLanguage);
    }
    
    if (selectedDifficulty !== 'All') {
      filteredChallenges = filteredChallenges.filter(challenge => challenge.difficulty === selectedDifficulty);
    }
    
    // Randomize and select 5 challenges
    const shuffled = filteredChallenges.sort(() => 0.5 - Math.random()).slice(0, 5);
    setChallenges(shuffled);
    
    if (shuffled.length > 0) {
      setUserCode(shuffled[0].buggyCode);
    }
    
    // Reset game state
    setCurrentChallenge(0);
    setScore(0);
    setTimeLeft(600);
    setGameCompleted(false);
    setShowResult(false);
    setIsCorrect(false);
  }, [selectedLanguage, selectedDifficulty]);

  useEffect(() => {
    if (timeLeft > 0 && !gameCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameCompleted(true);
    }
  }, [timeLeft, gameCompleted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleCodeChange = (value: string | undefined) => {
    setUserCode(value || '');
  };

  const checkSolution = () => {
    const currentChallengeData = challenges[currentChallenge];
    const userCodeNormalized = userCode.replace(/\s+/g, ' ').trim();
    const fixedCodeNormalized = currentChallengeData.fixedCode.replace(/\s+/g, ' ').trim();
    
    // Enhanced checking logic for different types of bugs
    let isFixed = false;
    
    // Check for specific fixes based on challenge type
    if (currentChallengeData.category === 'Arrays' && userCode.includes('i < arr.length')) {
      isFixed = true;
    } else if (currentChallengeData.category === 'Recursion' && userCode.includes('n - 1')) {
      isFixed = true;
    } else if (currentChallengeData.category === 'Logic' && userCode.includes('n % 2 == 0')) {
      isFixed = true;
    } else if (currentChallengeData.category === 'Scope' && userCode.includes('let count = 0;') && userCode.indexOf('let count = 0;') < userCode.indexOf('for')) {
      isFixed = true;
    } else if (currentChallengeData.category === 'Comparison' && userCode.includes('===')) {
      isFixed = true;
    } else if (currentChallengeData.category === 'Async' && userCode.includes('await fetch')) {
      isFixed = true;
    } else if (currentChallengeData.category === 'Memory Management' && userCode.includes('delete[]')) {
      isFixed = true;
    } else if (currentChallengeData.category === 'Null Safety' && userCode.includes('!= null')) {
      isFixed = true;
    } else {
      // Fallback: check similarity to fixed code
      const similarity = calculateSimilarity(userCodeNormalized, fixedCodeNormalized);
      isFixed = similarity > 0.8;
    }

    setIsCorrect(isFixed);
    setShowResult(true);
    
    if (isFixed) {
      setScore(score + 15);
    }
  };

  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  };

  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  };

  const handleNext = () => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(currentChallenge + 1);
      setUserCode(challenges[currentChallenge + 1].buggyCode);
      setShowResult(false);
      setIsCorrect(false);
    } else {
      setGameCompleted(true);
    }
  };

  const handleRestart = () => {
    // This will trigger useEffect to regenerate challenges
    setSelectedLanguage(selectedLanguage);
    setSelectedDifficulty(selectedDifficulty);
  };

  if (gameCompleted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bug className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">Bug Hunt Complete!</h1>
          <p className="text-gray-400 text-lg mb-8">Great job hunting down those bugs!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">{score}</div>
              <div className="text-gray-400">Total Score</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">{score / 15}</div>
              <div className="text-gray-400">Bugs Fixed</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{Math.round((score / (challenges.length * 15)) * 100)}%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 mx-auto"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Hunt More Bugs</span>
          </button>
        </motion.div>
      </div>
    );
  }

  if (challenges.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400">Loading bug challenges...</p>
        </div>
      </div>
    );
  }

  const currentChallengeData = challenges[currentChallenge];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Bug className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Bug Hunter</h1>
              <p className="text-gray-400">Challenge {currentChallenge + 1} of {challenges.length}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Trophy className="w-5 h-5" />
              <span className="font-bold">{score} pts</span>
            </div>
            <div className="flex items-center space-x-2 text-red-400">
              <Clock className="w-5 h-5" />
              <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-white text-sm"
            disabled={!gameCompleted}
          >
            {languages.map(language => (
              <option key={language} value={language} className="bg-gray-800">
                {language}
              </option>
            ))}
          </select>
          
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-white text-sm"
            disabled={!gameCompleted}
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty} className="bg-gray-800">
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentChallenge + 1) / challenges.length) * 100}%` }}
            />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Challenge Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20"
        >
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white mb-2">{currentChallengeData.title}</h2>
            <div className="flex items-center space-x-2 mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                currentChallengeData.difficulty === 'Easy' ? 'text-green-400 bg-green-500/20' :
                currentChallengeData.difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-500/20' :
                'text-red-400 bg-red-500/20'
              }`}>
                {currentChallengeData.difficulty}
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                {currentChallengeData.language}
              </span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                {currentChallengeData.category}
              </span>
            </div>
            <p className="text-gray-300">{currentChallengeData.description}</p>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Hints</h3>
            <ul className="space-y-2">
              {currentChallengeData.hints.map((hint, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-yellow-400 font-medium text-sm">{index + 1}.</span>
                  <span className="text-gray-300 text-sm">{hint}</span>
                </li>
              ))}
            </ul>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-lg border ${
                  isCorrect 
                    ? 'bg-green-500/10 border-green-500/30' 
                    : 'bg-red-500/10 border-red-500/30'
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span className="font-semibold text-white">
                    {isCorrect ? 'Bug Fixed!' : 'Bug Still There'}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{currentChallengeData.explanation}</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Code Editor */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20"
        >
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Fix the Bug</h3>
              <div className="flex space-x-2">
                {!showResult ? (
                  <button
                    onClick={checkSolution}
                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200"
                  >
                    Check Fix
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                  >
                    {currentChallenge === challenges.length - 1 ? 'Finish' : 'Next Bug'}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="h-96">
            <Editor
              height="100%"
              language={currentChallengeData.language.toLowerCase()}
              theme="vs-dark"
              value={userCode}
              onChange={handleCodeChange}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 16 },
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BugHunter;