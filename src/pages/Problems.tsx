import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Search, Filter, CheckCircle, Star, Zap, TrendingUp } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

const Problems = () => {
  const { problems, fetchProblems } = useGameStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchProblems();
  }, [fetchProblems]);

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'All' || problem.category === selectedCategory;
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const difficultyColors = {
    Easy: 'text-green-400 bg-green-500/20',
    Medium: 'text-yellow-400 bg-yellow-500/20',
    Hard: 'text-red-400 bg-red-500/20',
  };

  // Get unique categories from problems
  const categories = ['All', ...Array.from(new Set(problems.map(p => p.category)))];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  // Calculate stats
  const totalProblems = problems.length;
  const solvedProblems = problems.filter(p => p.solved).length;
  const easyProblems = problems.filter(p => p.difficulty === 'Easy').length;
  const mediumProblems = problems.filter(p => p.difficulty === 'Medium').length;
  const hardProblems = problems.filter(p => p.difficulty === 'Hard').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Coding Problems
        </h1>
        <p className="text-gray-400 text-lg">
          Master algorithms and data structures with our comprehensive problem collection
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 text-center">
          <div className="text-2xl font-bold text-purple-400">{totalProblems}</div>
          <div className="text-sm text-gray-400">Total</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-green-500/20 text-center">
          <div className="text-2xl font-bold text-green-400">{easyProblems}</div>
          <div className="text-sm text-gray-400">Easy</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20 text-center">
          <div className="text-2xl font-bold text-yellow-400">{mediumProblems}</div>
          <div className="text-sm text-gray-400">Medium</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-red-500/20 text-center">
          <div className="text-2xl font-bold text-red-400">{hardProblems}</div>
          <div className="text-sm text-gray-400">Hard</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 text-center">
          <div className="text-2xl font-bold text-blue-400">{solvedProblems}</div>
          <div className="text-sm text-gray-400">Solved</div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400"
            />
          </div>

          {/* Difficulty Filter */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty} className="bg-gray-800">
                  {difficulty} {difficulty !== 'All' && `(${problems.filter(p => p.difficulty === difficulty).length})`}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category} {category !== 'All' && `(${problems.filter(p => p.category === category).length})`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedDifficulty !== 'All' || selectedCategory !== 'All' || searchTerm) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedDifficulty !== 'All' && (
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Difficulty: {selectedDifficulty}
                <button 
                  onClick={() => setSelectedDifficulty('All')}
                  className="ml-2 text-purple-400 hover:text-purple-300"
                >
                  ×
                </button>
              </span>
            )}
            {selectedCategory !== 'All' && (
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                Category: {selectedCategory}
                <button 
                  onClick={() => setSelectedCategory('All')}
                  className="ml-2 text-blue-400 hover:text-blue-300"
                >
                  ×
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                Search: "{searchTerm}"
                <button 
                  onClick={() => setSearchTerm('')}
                  className="ml-2 text-green-400 hover:text-green-300"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <p className="text-gray-400">
          Showing {filteredProblems.length} of {totalProblems} problems
        </p>
      </motion.div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProblems.map((problem, index) => (
          <motion.div
            key={problem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Link to={`/problems/${problem.id}`} className="group block">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group-hover:bg-white/10 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-purple-400" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[problem.difficulty]}`}>
                      {problem.difficulty}
                    </span>
                  </div>
                  {problem.solved && (
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-xs text-green-400 font-medium">Solved</span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {problem.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {problem.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                      {problem.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">{problem.xpReward} XP</span>
                  </div>
                </div>

                {/* Progress indicator for solved problems */}
                {problem.solved && (
                  <div className="mt-4 w-full bg-gray-700 rounded-full h-1">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1 rounded-full w-full"></div>
                  </div>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredProblems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Code className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No problems found</h3>
          <p className="text-gray-500 mb-4">Try adjusting your search criteria</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedDifficulty('All');
              setSelectedCategory('All');
            }}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
          >
            Clear Filters
          </button>
        </motion.div>
      )}

      {/* Category Overview */}
      {selectedCategory === 'All' && !searchTerm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-500/30"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Problem Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.slice(1).map((category) => {
              const categoryCount = problems.filter(p => p.category === category).length;
              const solvedCount = problems.filter(p => p.category === category && p.solved).length;
              const progress = categoryCount > 0 ? (solvedCount / categoryCount) * 100 : 0;
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="bg-white/5 hover:bg-white/10 rounded-lg p-4 text-center transition-all duration-200 border border-gray-600 hover:border-purple-500/50"
                >
                  <div className="text-lg font-bold text-white mb-1">{categoryCount}</div>
                  <div className="text-sm text-gray-400 mb-2">{category}</div>
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{solvedCount}/{categoryCount}</div>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Problems;