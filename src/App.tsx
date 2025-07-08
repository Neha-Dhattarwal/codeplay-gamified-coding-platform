import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from './store/authStore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Problems from './pages/Problems';
import ProblemDetail from './pages/ProblemDetail';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import GameModes from './pages/GameModes';
import MCQQuiz from './pages/MCQQuiz';
import FlashCards from './pages/FlashCards';
import DailyPractice from './pages/DailyPractice';
import BattleArena from './pages/BattleArena';
import BugHunter from './pages/BugHunter';
import AdminPanel from './pages/AdminPanel';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const { user, isLoading, initialize } = useAuthStore();

  React.useEffect(() => {
    initialize();
  }, [initialize]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="min-h-screen bg-black/20 backdrop-blur-sm">
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pt-16"
          >
            <Routes>
              <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LandingPage />} />
              <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
              <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
              <Route path="/problems" element={user ? <Problems /> : <Navigate to="/login" />} />
              <Route path="/problems/:id" element={user ? <ProblemDetail /> : <Navigate to="/login" />} />
              <Route path="/leaderboard" element={user ? <Leaderboard /> : <Navigate to="/login" />} />
              <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
              <Route path="/game-modes" element={user ? <GameModes /> : <Navigate to="/login" />} />
              
              {/* Game Mode Routes */}
              <Route path="/quiz" element={user ? <MCQQuiz /> : <Navigate to="/login" />} />
              <Route path="/flash-cards" element={user ? <FlashCards /> : <Navigate to="/login" />} />
              <Route path="/daily-practice" element={user ? <DailyPractice /> : <Navigate to="/login" />} />
              <Route path="/battle" element={user ? <BattleArena /> : <Navigate to="/login" />} />
              <Route path="/bug-hunter" element={user ? <BugHunter /> : <Navigate to="/login" />} />
              
              {/* Admin Routes */}
              <Route 
                path="/admin" 
                element={user?.role === 'admin' ? <AdminPanel /> : <Navigate to="/dashboard" />} 
              />
            </Routes>
          </motion.main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;