'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Upload, Save, Mail, User, Calendar } from 'lucide-react';

export default function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [bio, setBio] = useState('Content creator & digital artist');
  const [social, setSocial] = useState({
    twitter: '@johndoe',
    youtube: 'johndoe',
    instagram: '@johndoe',
  });

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Your Profile</h1>
          <p className="text-primary/60">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-dark rounded-3xl p-8"
        >
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12 pb-8 border-b border-primary/10">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl">
                👤
              </div>
              <motion.button
                className="absolute bottom-0 right-0 bg-primary hover:bg-primary/80 text-dark p-3 rounded-full transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Upload size={20} />
              </motion.button>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{name}</h2>
              <p className="text-primary/60 mb-4">{email}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Creator</span>
                <span className="px-3 py-1 bg-secondary/10 rounded-full text-sm">Premium</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center space-x-2">
                  <User size={16} />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center space-x-2">
                  <Mail size={16} />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors h-24 resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-bold">Social Media</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  value={social.twitter}
                  onChange={(e) => setSocial({ ...social, twitter: e.target.value })}
                  placeholder="Twitter handle"
                  className="bg-dark/50 border border-primary/20 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors text-sm"
                />
                <input
                  type="text"
                  value={social.youtube}
                  onChange={(e) => setSocial({ ...social, youtube: e.target.value })}
                  placeholder="YouTube channel"
                  className="bg-dark/50 border border-primary/20 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors text-sm"
                />
                <input
                  type="text"
                  value={social.instagram}
                  onChange={(e) => setSocial({ ...social, instagram: e.target.value })}
                  placeholder="Instagram handle"
                  className="bg-dark/50 border border-primary/20 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
            </div>

            {/* Save Button */}
            <motion.button
              className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark font-bold hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Save size={20} />
              <span>Save Changes</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Generated', value: '1,234' },
            { label: 'Downloads', value: '456' },
            { label: 'Shared', value: '89' },
            { label: 'Followers', value: '2.3K' },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-xl p-6 text-center">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-primary/60 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
}
