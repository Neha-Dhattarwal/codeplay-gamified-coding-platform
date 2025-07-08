import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Users, 
  Code, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  BarChart3,
  Shield
} from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'problems', label: 'Problems', icon: Code },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%', color: 'from-blue-500 to-cyan-500' },
    { label: 'Active Problems', value: '89', change: '+5%', color: 'from-purple-500 to-pink-500' },
    { label: 'Daily Submissions', value: '456', change: '+23%', color: 'from-green-500 to-emerald-500' },
    { label: 'System Health', value: '99.9%', change: 'Stable', color: 'from-yellow-500 to-orange-500' },
  ];

  const recentUsers = [
    { id: 1, username: 'coder123', email: 'coder@example.com', level: 5, joinDate: '2024-01-15', status: 'active' },
    { id: 2, username: 'devmaster', email: 'dev@example.com', level: 8, joinDate: '2024-01-14', status: 'active' },
    { id: 3, username: 'pythonista', email: 'python@example.com', level: 3, joinDate: '2024-01-13', status: 'inactive' },
  ];

  const problems = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', category: 'Array', submissions: 234, solved: 189 },
    { id: 2, title: 'Palindrome Number', difficulty: 'Easy', category: 'Math', submissions: 156, solved: 123 },
    { id: 3, title: 'Binary Tree Inorder', difficulty: 'Medium', category: 'Tree', submissions: 89, solved: 45 },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
            <div className="text-green-400 text-sm font-medium">{stat.change}</div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
        <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300">New user "algorithmist" registered</span>
            <span className="text-gray-500 text-sm ml-auto">2 minutes ago</span>
          </div>
          <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-gray-300">Problem "Merge Sort" was solved by 5 users</span>
            <span className="text-gray-500 text-sm ml-auto">15 minutes ago</span>
          </div>
          <div className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-gray-300">System backup completed successfully</span>
            <span className="text-gray-500 text-sm ml-auto">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">User Management</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
          <Plus className="w-4 h-4" />
          <span>Add User</span>
        </button>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Level</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {recentUsers.map((user) => (
                <tr key={user.id} className="hover:bg-white/5">
                  <td className="px-6 py-4">
                    <div className="text-white font-medium">{user.username}</div>
                    <div className="text-gray-400 text-sm">{user.joinDate}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="text-purple-400 font-medium">Level {user.level}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' 
                        ? 'text-green-400 bg-green-500/20' 
                        : 'text-red-400 bg-red-500/20'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-400 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-yellow-400 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProblems = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">Problem Management</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
          <Plus className="w-4 h-4" />
          <span>Add Problem</span>
        </button>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Problem</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Difficulty</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stats</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {problems.map((problem) => (
                <tr key={problem.id} className="hover:bg-white/5">
                  <td className="px-6 py-4">
                    <div className="text-white font-medium">{problem.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      problem.difficulty === 'Easy' ? 'text-green-400 bg-green-500/20' :
                      problem.difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-500/20' :
                      'text-red-400 bg-red-500/20'
                    }`}>
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full text-xs">
                      {problem.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    <div className="text-sm">
                      {problem.solved}/{problem.submissions} solved
                    </div>
                    <div className="text-xs text-gray-500">
                      {Math.round((problem.solved / problem.submissions) * 100)}% success rate
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-400 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-yellow-400 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">System Settings</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <h4 className="text-lg font-semibold text-white mb-4">General Settings</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Site Name</label>
              <input
                type="text"
                defaultValue="CodePlay"
                className="w-full px-3 py-2 bg-white/5 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Max Users</label>
              <input
                type="number"
                defaultValue="10000"
                className="w-full px-3 py-2 bg-white/5 border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <h4 className="text-lg font-semibold text-white mb-4">Security Settings</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Enable Two-Factor Auth</span>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Password Complexity</span>
              <select className="bg-white/5 border border-gray-600 rounded px-2 py-1 text-white">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
            <p className="text-gray-400">Manage your CodePlay platform</p>
          </div>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-purple-500/20">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:text-gray-300 hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'users' && renderUsers()}
        {activeTab === 'problems' && renderProblems()}
        {activeTab === 'settings' && renderSettings()}
      </motion.div>
    </div>
  );
};

export default AdminPanel;