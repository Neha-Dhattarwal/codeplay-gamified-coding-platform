import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Brain, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { mcqQuestions, MCQQuestion } from '../data/mcqQuestions';

const MCQQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const categories = ['All', 'JavaScript', 'Python', 'Algorithms', 'Data Structures', 'Web Development', 'Database', 'CSS', 'Git', 'React', 'Java', 'C++', 'OOP', 'Design Patterns', 'Graph Theory'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  useEffect(() => {
    // Filter and randomize questions based on selected criteria
    let filteredQuestions = [...mcqQuestions];
    
    if (selectedCategory !== 'All') {
      filteredQuestions = filteredQuestions.filter(q => q.category === selectedCategory);
    }
    
    if (selectedDifficulty !== 'All') {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty === selectedDifficulty);
    }
    
    // Randomize and select 15 questions
    const shuffled = filteredQuestions.sort(() => 0.5 - Math.random()).slice(0, 15);
    setQuestions(shuffled);
    setAnswers(new Array(15).fill(null));
    
    // Reset quiz state
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(600);
    setQuizCompleted(false);
    setShowExplanation(false);
    setHasAnswered(false);
  }, [selectedCategory, selectedDifficulty]);

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleQuizComplete();
    }
  }, [timeLeft, quizCompleted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setHasAnswered(true);
    
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 5);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1]);
      setShowExplanation(false);
      setHasAnswered(answers[currentQuestion + 1] !== null);
    } else {
      handleQuizComplete();
    }
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    // Calculate final score
    let finalScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index]?.correctAnswer) {
        finalScore += 5;
      }
    });
    setScore(finalScore);
  };

  const handleRestart = () => {
    // This will trigger useEffect to regenerate questions
    setSelectedCategory(selectedCategory);
    setSelectedDifficulty(selectedDifficulty);
  };

  const toggleExplanation = () => {
    if (!hasAnswered) return;
    setShowExplanation(!showExplanation);
  };

  if (questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400">Loading quiz questions...</p>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">Quiz Completed!</h1>
          <p className="text-gray-400 text-lg mb-8">Great job on completing the MCQ quiz!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">{score}</div>
              <div className="text-gray-400">Total Score</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">{score / 5}</div>
              <div className="text-gray-400">Correct Answers</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{Math.round((score / (questions.length * 5)) * 100)}%</div>
              <div className="text-gray-400">Accuracy</div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleRestart}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          </div>
        </motion.div>
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
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">MCQ Quiz</h1>
              <p className="text-gray-400">Question {currentQuestion + 1} of {questions.length}</p>
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
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-white text-sm"
            disabled={!quizCompleted}
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-800">
                {category}
              </option>
            ))}
          </select>
          
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-white text-sm"
            disabled={!quizCompleted}
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
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Question */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 mb-8"
      >
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
              {questions[currentQuestion].category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              questions[currentQuestion].difficulty === 'Easy' ? 'text-green-400 bg-green-500/20' :
              questions[currentQuestion].difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-500/20' :
              'text-red-400 bg-red-500/20'
            }`}>
              {questions[currentQuestion].difficulty}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-white mb-6">
            {questions[currentQuestion].question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-6">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={hasAnswered}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                hasAnswered
                  ? index === questions[currentQuestion].correctAnswer
                    ? 'border-green-500 bg-green-500/20 text-green-300'
                    : selectedAnswer === index && index !== questions[currentQuestion].correctAnswer
                    ? 'border-red-500 bg-red-500/20 text-red-300'
                    : 'border-gray-600 text-gray-400 opacity-60'
                  : selectedAnswer === index
                  ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                  : 'border-gray-600 hover:border-gray-500 text-gray-300 hover:bg-white/5'
              } ${hasAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  hasAnswered
                    ? index === questions[currentQuestion].correctAnswer
                      ? 'border-green-400 bg-green-400'
                      : selectedAnswer === index && index !== questions[currentQuestion].correctAnswer
                      ? 'border-red-400 bg-red-400'
                      : 'border-gray-500'
                    : selectedAnswer === index
                    ? 'border-purple-400 bg-purple-400'
                    : 'border-gray-500'
                }`}>
                  {((hasAnswered && index === questions[currentQuestion].correctAnswer) || 
                    (!hasAnswered && selectedAnswer === index)) && 
                    <div className="w-2 h-2 bg-white rounded-full" />}
                  {hasAnswered && selectedAnswer === index && index !== questions[currentQuestion].correctAnswer && 
                    <XCircle className="w-3 h-3 text-white" />}
                  {hasAnswered && index === questions[currentQuestion].correctAnswer && 
                    <CheckCircle className="w-3 h-3 text-white" />}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && hasAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6"
          >
            <div className="flex items-start space-x-2">
              <div className="flex items-center space-x-2 mb-2">
                {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <span className="font-semibold text-white">
                  {selectedAnswer === questions[currentQuestion].correctAnswer ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
            </div>
            <p className="text-gray-300">{questions[currentQuestion].explanation}</p>
          </motion.div>
        )}

        {/* Actions */}
        <div className="flex justify-between">
          {!hasAnswered ? (
            <>
              <div></div>
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            </>
          ) : (
            <>
              <button
                onClick={toggleExplanation}
                className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:border-gray-500 hover:text-gray-300 transition-colors"
              >
                {showExplanation ? 'Hide' : 'Show'} Explanation
              </button>
              
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MCQQuiz;