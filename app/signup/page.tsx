'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, Check } from 'lucide-react';

const passwordStrengthChecks = [
  { label: 'At least 8 characters', check: (pwd: string) => pwd.length >= 8 },
  { label: 'Contains uppercase letter', check: (pwd: string) => /[A-Z]/.test(pwd) },
  { label: 'Contains lowercase letter', check: (pwd: string) => /[a-z]/.test(pwd) },
  { label: 'Contains number', check: (pwd: string) => /[0-9]/.test(pwd) },
];

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      (window as any).addNotification?.('Account created successfully!', 'success');
      setLoading(false);
    }, 1500);
  };

  const passwordStrength = passwordStrengthChecks.filter((check) => check.check(password)).length;
  const strengthPercentage = (passwordStrength / passwordStrengthChecks.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark flex items-center justify-center px-6 py-12">
      {/* Animated Background */}
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">EditHub</h1>
          <p className="text-primary/60">Start creating amazing content with AI</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="glass-dark rounded-2xl p-8 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 w-5 h-5" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-dark/50 border border-primary/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-dark/50 border border-primary/20 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-dark/50 border border-primary/20 rounded-lg pl-12 pr-12 py-3 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/60 hover:text-primary"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Password Strength Indicator */}
            <div className="mt-3 space-y-2">
              <div className="h-2 bg-dark/50 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${
                    strengthPercentage < 50
                      ? 'bg-accent'
                      : strengthPercentage < 75
                      ? 'bg-yellow-500'
                      : 'bg-primary'
                  }`}
                  animate={{ width: `${strengthPercentage}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <ul className="space-y-1">
                {passwordStrengthChecks.map((check, index) => (
                  <li
                    key={index}
                    className={`text-xs flex items-center space-x-2 ${
                      check.check(password) ? 'text-primary' : 'text-primary/40'
                    }`}
                  >
                    <Check size={14} />
                    <span>{check.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" className="w-4 h-4 rounded border-primary/20" />
            <span>
              I agree to the{' '}
              <a href="#" className="text-primary hover:text-primary/80">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary hover:text-primary/80">
                Privacy Policy
              </a>
            </span>
          </label>

          {/* Signup Button */}
          <motion.button
            type="submit"
            disabled={loading || !name || !email || !password}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-dark disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </motion.button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-darker text-primary/60">Or sign up with</span>
            </div>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="py-2 rounded-lg glass hover:bg-primary/10 transition-colors border border-primary/20"
            >
              Google
            </button>
            <button
              type="button"
              className="py-2 rounded-lg glass hover:bg-primary/10 transition-colors border border-primary/20"
            >
              GitHub
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="text-center mt-8 text-primary/60">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
