import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { 
  Play, 
  Send, 
  Code, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Lightbulb,
  Zap,
  AlertCircle,
  BookOpen,
  Target
} from 'lucide-react';
import { useGameStore } from '../store/gameStore';

const ProblemDetail = () => {
  const { id } = useParams();
  const { problems, currentProblem, userCode, isRunning, testResults, setProblem, setUserCode, runCode, submitCode } = useGameStore();
  const [activeTab, setActiveTab] = useState('description');
  const [language, setLanguage] = useState('javascript');

  useEffect(() => {
    const problem = problems.find(p => p.id === id);
    if (problem) {
      setProblem(problem);
      setUserCode(problem.starterCode[language as keyof typeof problem.starterCode]);
    }
  }, [id, problems, setProblem, language]);

  useEffect(() => {
    if (currentProblem) {
      setUserCode(currentProblem.starterCode[language as keyof typeof currentProblem.starterCode]);
    }
  }, [language, currentProblem, setUserCode]);

  const handleEditorChange = (value: string | undefined) => {
    setUserCode(value || '');
  };

  const handleRunCode = async () => {
    await runCode();
  };

  const handleSubmitCode = async () => {
    await submitCode();
  };

  if (!currentProblem) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <Code className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-400">Problem not found</h2>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    Easy: 'text-green-400 bg-green-500/20 border-green-500/30',
    Medium: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30',
    Hard: 'text-red-400 bg-red-500/20 border-red-500/30',
  };

  const languageMap = {
    javascript: 'JavaScript',
    python: 'Python',
    cpp: 'C++',
    java: 'Java'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Problem Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-white">{currentProblem.title}</h1>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${difficultyColors[currentProblem.difficulty]}`}>
                  {currentProblem.difficulty}
                </span>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">{currentProblem.xpReward} XP</span>
                </div>
                {currentProblem.solved && (
                  <div className="flex items-center space-x-1 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Solved</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'description' 
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Description</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('hints')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'hints' 
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Hints</span>
                </div>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[600px] overflow-y-auto">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Problem Statement</h3>
                  <p className="text-gray-300 leading-relaxed">{currentProblem.description}</p>
                </div>

                {currentProblem.examples && currentProblem.examples.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Examples</h3>
                    <div className="space-y-4">
                      {currentProblem.examples.map((example, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                          <div className="mb-2">
                            <span className="text-gray-400 text-sm font-medium">Input:</span>
                            <code className="block text-green-400 font-mono text-sm mt-1 bg-gray-900/50 p-2 rounded">
                              {example.input}
                            </code>
                          </div>
                          <div className="mb-2">
                            <span className="text-gray-400 text-sm font-medium">Output:</span>
                            <code className="block text-blue-400 font-mono text-sm mt-1 bg-gray-900/50 p-2 rounded">
                              {example.output}
                            </code>
                          </div>
                          {example.explanation && (
                            <div>
                              <span className="text-gray-400 text-sm font-medium">Explanation:</span>
                              <p className="text-gray-300 text-sm mt-1">{example.explanation}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentProblem.constraints && currentProblem.constraints.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Constraints</h3>
                    <ul className="space-y-1">
                      {currentProblem.constraints.map((constraint, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <code className="bg-gray-800/50 px-2 py-1 rounded text-xs">{constraint}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-blue-400 mb-2">
                    <Target className="w-4 h-4" />
                    <span className="font-medium">Category: {currentProblem.category}</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    This problem focuses on {currentProblem.category.toLowerCase()} concepts and algorithms.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'hints' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-yellow-400 mb-4">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Hints</h3>
                </div>
                {currentProblem.hints.map((hint, index) => (
                  <div key={index} className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <span className="text-yellow-400 font-medium text-sm bg-yellow-500/20 rounded-full w-6 h-6 flex items-center justify-center">
                        {index + 1}
                      </span>
                      <p className="text-gray-300">{hint}</p>
                    </div>
                  </div>
                ))}
                
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mt-6">
                  <div className="flex items-center space-x-2 text-purple-400 mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span className="font-medium">Tip</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Try to solve the problem step by step. Start with a brute force approach, then optimize it.
                    Don't forget to handle edge cases!
                  </p>
                </div>
              </div>
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
          {/* Editor Header */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-purple-500"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="cpp">C++</option>
                  <option value="java">Java</option>
                </select>
                <span className="text-gray-400 text-sm">
                  {languageMap[language as keyof typeof languageMap]}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span>{isRunning ? 'Running...' : 'Run'}</span>
                </button>
                
                <button
                  onClick={handleSubmitCode}
                  disabled={isRunning}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>

          {/* Editor */}
          <div className="h-96">
            <Editor
              height="100%"
              language={language === 'cpp' ? 'cpp' : language}
              theme="vs-dark"
              value={userCode}
              onChange={handleEditorChange}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 16 },
                wordWrap: 'on',
                tabSize: 2,
              }}
            />
          </div>

          {/* Test Results */}
          {testResults.length > 0 && (
            <div className="p-4 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Test Results</span>
              </h3>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {testResults.map((result, index) => (
                  <div key={index} className={`rounded-lg p-3 border ${
                    result.passed 
                      ? 'bg-green-500/10 border-green-500/30' 
                      : 'bg-red-500/10 border-red-500/30'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Test Case {index + 1}</span>
                      <div className="flex items-center space-x-1">
                        {result.passed ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-400" />
                        )}
                        <span className={`text-sm font-medium ${result.passed ? 'text-green-400' : 'text-red-400'}`}>
                          {result.passed ? 'Passed' : 'Failed'}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm space-y-1">
                      <div>
                        <span className="text-gray-400">Input:</span>
                        <code className="text-green-400 ml-2 bg-gray-800/50 px-2 py-1 rounded text-xs">
                          {result.input}
                        </code>
                      </div>
                      <div>
                        <span className="text-gray-400">Expected:</span>
                        <code className="text-blue-400 ml-2 bg-gray-800/50 px-2 py-1 rounded text-xs">
                          {result.expected}
                        </code>
                      </div>
                      <div>
                        <span className="text-gray-400">Actual:</span>
                        <code className={`ml-2 bg-gray-800/50 px-2 py-1 rounded text-xs ${
                          result.passed ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {result.actual}
                        </code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Summary */}
              <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    {testResults.filter(r => r.passed).length} / {testResults.length} test cases passed
                  </span>
                  {testResults.every(r => r.passed) && (
                    <span className="text-green-400 font-medium">All tests passed! 🎉</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Code Validation Notice */}
          <div className="p-4 border-t border-gray-700">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
              <div className="flex items-center space-x-2 text-blue-400 mb-1">
                <AlertCircle className="w-4 h-4" />
                <span className="font-medium text-sm">Code Validation</span>
              </div>
              <p className="text-gray-300 text-xs">
                Your code must contain a valid solution with proper logic and return statements. 
                Template code or empty functions will not execute.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemDetail;