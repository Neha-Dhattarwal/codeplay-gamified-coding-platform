import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, CheckCircle, XCircle, RotateCcw, Code } from 'lucide-react';
import { flashCardQuestions, FlashCardQuestion } from '../data/flashCardQuestions';

const FlashCards = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute per set
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [cards, setCards] = useState<FlashCardQuestion[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const languages = ['All', 'JavaScript', 'Python', 'C++', 'Java'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  useEffect(() => {
    // Filter and randomize cards based on selected criteria
    let filteredCards = [...flashCardQuestions];
    
    if (selectedLanguage !== 'All') {
      filteredCards = filteredCards.filter(card => card.language === selectedLanguage);
    }
    
    if (selectedDifficulty !== 'All') {
      filteredCards = filteredCards.filter(card => card.difficulty === selectedDifficulty);
    }
    
    // Randomize and select 8 cards
    const shuffled = filteredCards.sort(() => 0.5 - Math.random()).slice(0, 8);
    setCards(shuffled);
    
    // Reset game state
    setCurrentCard(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(60);
    setGameCompleted(false);
    setShowResult(false);
  }, [selectedLanguage, selectedDifficulty]);

  useEffect(() => {
    if (timeLeft > 0 && !gameCompleted && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleGameComplete();
    }
  }, [timeLeft, gameCompleted, showResult]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === cards[currentCard].correct) {
      setScore(score + 7);
    }
  };

  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      handleGameComplete();
    }
  };

  const handleGameComplete = () => {
    setGameCompleted(true);
  };

  const handleRestart = () => {
    // This will trigger useEffect to regenerate cards
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
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">Flash Cards Completed!</h1>
          <p className="text-gray-400 text-lg mb-8">Great job on the code output predictions!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">{score}</div>
              <div className="text-gray-400">Total Score</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">{score / 7}</div>
              <div className="text-gray-400">Correct Answers</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{Math.round((score / (cards.length * 7)) * 100)}%</div>
              <div className="text-gray-400">Accuracy</div>
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 mx-auto"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>
        </motion.div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400">Loading flash cards...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Flash Cards</h1>
              <p className="text-gray-400">Card {currentCard + 1} of {cards.length}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Zap className="w-5 h-5" />
              <span className="font-bold">{score} pts</span>
            </div>
            <div className="flex items-center space-x-2 text-red-400">
              <Clock className="w-5 h-5" />
              <span className="font-mono font-bold">{timeLeft}s</span>
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
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentCard + 1) / cards.length) * 100}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Flash Card */}
      <motion.div
        key={currentCard}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 mb-8"
      >
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
              {cards[currentCard].language}
            </span>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                cards[currentCard].difficulty === 'Easy' ? 'text-green-400 bg-green-500/20' :
                cards[currentCard].difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-500/20' :
                'text-red-400 bg-red-500/20'
              }`}>
                {cards[currentCard].difficulty}
              </span>
              <span className="text-gray-400 text-sm">What will this code output?</span>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <code className="text-green-400 font-mono text-lg whitespace-pre-wrap">
              {cards[currentCard].code}
            </code>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-6">
          {cards[currentCard].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                showResult
                  ? index === cards[currentCard].correct
                    ? 'border-green-500 bg-green-500/20 text-green-300'
                    : selectedAnswer === index && index !== cards[currentCard].correct
                    ? 'border-red-500 bg-red-500/20 text-red-300'
                    : 'border-gray-600 text-gray-400 opacity-60'
                  : selectedAnswer === index
                  ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                  : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:bg-white/5'
              } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  showResult
                    ? index === cards[currentCard].correct
                      ? 'border-green-400 bg-green-400'
                      : selectedAnswer === index && index !== cards[currentCard].correct
                      ? 'border-red-400 bg-red-400'
                      : 'border-gray-500'
                    : selectedAnswer === index
                    ? 'border-purple-400 bg-purple-400'
                    : 'border-gray-500'
                }`}>
                  {showResult && index === cards[currentCard].correct && 
                    <CheckCircle className="w-3 h-3 text-white" />}
                  {showResult && selectedAnswer === index && index !== cards[currentCard].correct && 
                    <XCircle className="w-3 h-3 text-white" />}
                  {!showResult && selectedAnswer === index && 
                    <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <span className="font-mono">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6"
          >
            <div className="flex items-start space-x-2">
              <div className="flex items-center space-x-2 mb-2">
                {selectedAnswer === cards[currentCard].correct ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <span className="font-semibold text-white">
                  {selectedAnswer === cards[currentCard].correct ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
            </div>
            <p className="text-gray-300">{cards[currentCard].explanation}</p>
          </motion.div>
        )}

        {/* Next Button */}
        {showResult && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
            >
              {currentCard === cards.length - 1 ? 'Finish' : 'Next Card'}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FlashCards;