'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Home,
  Image,
  Type,
  Sparkles,
  DollarSign,
  Settings,
  User,
  Menu,
  X,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Image, label: 'Thumbnail Generator', href: '/thumbnail-generator' },
  { icon: Type, label: 'Caption Writer', href: '/caption-writer' },
  { icon: Sparkles, label: 'Image Generator', href: '/image-generator' },
  { icon: DollarSign, label: 'Pricing', href: '/pricing' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: -250 },
    visible: { x: 0 },
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden fixed top-6 left-6 z-50 p-2 glass rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.aside
        className={`${
          isOpen ? 'fixed' : 'hidden md:block'
        } w-64 h-screen bg-gradient-to-b from-dark via-darker to-darker border-r border-primary/10 p-6 z-40 overflow-y-auto`}
        variants={sidebarVariants}
        animate={isOpen ? 'visible' : 'hidden'}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold gradient-text">EditHub</h1>
          <p className="text-xs text-primary/70 mt-1">AI Creator Platform</p>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2 mb-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
              >
                <item.icon
                  size={20}
                  className="group-hover:text-primary transition-colors"
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-primary/10 my-6"></div>

        {/* Bottom Items */}
        <nav className="space-y-2 mb-6">
          {bottomItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (menuItems.length + index) * 0.1 }}
            >
              <Link
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
              >
                <item.icon
                  size={20}
                  className="group-hover:text-primary transition-colors"
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Logout Button */}
        <motion.button
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent transition-all duration-300 text-sm font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </motion.button>
      </motion.aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
