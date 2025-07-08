import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  role: 'player' | 'admin';
  xp: number;
  level: number;
  solvedProblems: string[];
  badges: string[];
  streak: number;
  lastLogin: Date;
  isPremium: boolean;
  createdAt: Date;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  users: User[]; // In-memory user storage for demo
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  initialize: () => void;
}

// In-memory storage for demo purposes
const STORAGE_KEYS = {
  USERS: 'codeplay_users',
  CURRENT_USER: 'codeplay_current_user',
  TOKEN: 'codeplay_token'
};

// Helper functions for local storage
const getStoredUsers = (): User[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.USERS);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveUsers = (users: User[]) => {
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

const generateUserId = () => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

const generateToken = (userId: string) => {
  return `token_${userId}_${Date.now()}`;
};

const hashPassword = (password: string) => {
  // Simple hash for demo - in production use proper bcrypt
  return btoa(password + 'salt_key_codeplay');
};

const verifyPassword = (password: string, hash: string) => {
  return hashPassword(password) === hash;
};

// Create demo user if none exist
const initializeDemoUser = () => {
  const users = getStoredUsers();
  if (users.length === 0) {
    const demoUser: User = {
      id: 'demo_user_1',
      name: 'Demo User',
      email: 'demo@codeplay.com',
      username: 'demouser',
      role: 'player',
      xp: 150,
      level: 2,
      solvedProblems: ['1'],
      badges: ['First Steps'],
      streak: 3,
      lastLogin: new Date(),
      isPremium: false,
      createdAt: new Date()
    };
    
    // Store demo user with pre-calculated hash for password "Demo123!"
    const usersWithPassword = [{
      ...demoUser,
      password: 'RGVtbzEyMyFzYWx0X2tleV9jb2RlcGxheQ=='
    }];
    
    saveUsers(usersWithPassword);
  }
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  token: null,
  isLoading: true,
  users: [],

  register: async (name: string, email: string, password: string) => {
    try {
      const users = getStoredUsers();
      
      // Check if user already exists
      const existingUser = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase());
      if (existingUser) {
        throw new Error('An account with this email already exists. Please sign in instead.');
      }

      // Create new user
      const newUser: User = {
        id: generateUserId(),
        name: name.trim(),
        email: email.toLowerCase().trim(),
        username: name.toLowerCase().replace(/\s+/g, ''),
        role: 'player',
        xp: 0,
        level: 1,
        solvedProblems: [],
        badges: ['Welcome'],
        streak: 0,
        lastLogin: new Date(),
        isPremium: false,
        createdAt: new Date()
      };

      // Store user with hashed password
      const userWithPassword = {
        ...newUser,
        password: hashPassword(password)
      };

      const updatedUsers = [...users, userWithPassword];
      saveUsers(updatedUsers);

      // Generate token and login user
      const token = generateToken(newUser.id);
      
      localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));

      set({ user: newUser, token, isLoading: false });
      
      console.log('Registration successful for:', newUser.email);
    } catch (error: any) {
      console.error('Registration failed:', error);
      throw error;
    }
  },

  login: async (email: string, password: string) => {
    try {
      const users = getStoredUsers();
      
      // Find user by email
      const userWithPassword = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase());
      
      if (!userWithPassword) {
        throw new Error('No account found with this email address. Please register first.');
      }

      // Verify password
      if (!verifyPassword(password, userWithPassword.password)) {
        throw new Error('Incorrect password. Please try again.');
      }

      // Create user object without password
      const { password: _, ...user } = userWithPassword;
      
      // Update last login
      const updatedUser = {
        ...user,
        lastLogin: new Date()
      };

      // Update user in storage
      const updatedUsers = users.map((u: any) => 
        u.id === user.id ? { ...userWithPassword, lastLogin: new Date() } : u
      );
      saveUsers(updatedUsers);

      // Generate token and login user
      const token = generateToken(user.id);
      
      localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(updatedUser));

      set({ user: updatedUser, token, isLoading: false });
      
      console.log('Login successful for:', user.email);
    } catch (error: any) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    set({ user: null, token: null });
    console.log('User logged out');
  },

  initialize: () => {
    try {
      // Initialize demo user
      initializeDemoUser();
      
      const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
      const userData = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      
      if (token && userData) {
        const user = JSON.parse(userData);
        set({ user, token, isLoading: false });
        console.log('User session restored for:', user.email);
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      console.error('Session restoration failed:', error);
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
      set({ isLoading: false });
    }
  },
}));