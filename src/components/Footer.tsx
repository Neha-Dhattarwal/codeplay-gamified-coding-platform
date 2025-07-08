import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/20 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CodePlay
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Gamify your coding journey with interactive challenges, competitions, and learning resources.
            </p>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for developers</span>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Coding Problems</li>
              <li>Game Modes</li>
              <li>Leaderboards</li>
              <li>Battle Arena</li>
              <li>Learning Resources</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Documentation</li>
              <li>Community</li>
              <li>Contact Us</li>
              <li>Bug Reports</li>
              <li>Feature Requests</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CodePlay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;