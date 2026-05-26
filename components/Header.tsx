'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Settings, User } from 'lucide-react';

export default function Header() {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-dark/50 backdrop-blur-xl border-b border-primary/10">
      <div className="px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Search Bar */}
        <motion.div
          className={`flex-1 max-w-md hidden md:flex items-center space-x-2 glass px-4 py-2 rounded-lg transition-all duration-300 ${
            searchActive ? 'ring-2 ring-primary' : ''
          }`}
          onClick={() => setSearchActive(true)}
        >
          <Search size={18} className="text-primary/60" />
          <input
            type="text"
            placeholder="Search projects..."
            className="flex-1 bg-transparent outline-none text-sm placeholder-primary/40"
            onBlur={() => setSearchActive(false)}
          />
        </motion.div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Notifications */}
          <motion.button
            className="relative p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell size={20} className="text-primary/70 hover:text-primary" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          </motion.button>

          {/* Settings */}
          <motion.button
            className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings size={20} className="text-primary/70 hover:text-primary" />
          </motion.button>

          {/* Profile */}
          <motion.button
            className="flex items-center space-x-2 ml-2 px-3 py-2 glass rounded-lg hover:bg-primary/10 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <User size={16} />
            </div>
            <span className="text-sm font-medium hidden sm:inline">Profile</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
