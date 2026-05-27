'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Bell, Lock, Eye, Download, Trash2 } from 'lucide-react';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    weekly: false,
  });

  const [privacy, setPrivacy] = useState({
    public: true,
    searchEngines: true,
    analytics: true,
  });

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">Settings</h1>
          <p className="text-primary/60">Manage your account preferences</p>
        </div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-dark rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Notifications</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Email Notifications',
                description: 'Receive updates via email',
                key: 'email' as keyof typeof notifications,
              },
              {
                title: 'Push Notifications',
                description: 'Receive browser notifications',
                key: 'push' as keyof typeof notifications,
              },
              {
                title: 'Weekly Summary',
                description: 'Get a weekly summary of your activity',
                key: 'weekly' as keyof typeof notifications,
              },
            ].map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between py-4 border-b border-primary/10 last:border-b-0"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-primary/60">{item.description}</p>
                </div>
                <label className="relative inline-block w-12 h-6">
                  <input
                    type="checkbox"
                    checked={notifications[item.key]}
                    onChange={(e) =>
                      setNotifications({ ...notifications, [item.key]: e.target.checked })
                    }
                    className="opacity-0 w-0 h-0"
                  />
                  <span
                    className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all ${
                      notifications[item.key]
                        ? 'bg-gradient-to-r from-primary to-secondary'
                        : 'bg-primary/20'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-dark transition-transform ${
                        notifications[item.key] ? 'translate-x-6' : ''
                      }`}
                    />
                  </span>
                </label>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-dark rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Privacy & Security</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Public Profile',
                description: 'Allow others to view your profile',
                key: 'public' as keyof typeof privacy,
              },
              {
                title: 'Search Engines',
                description: 'Allow search engines to index your content',
                key: 'searchEngines' as keyof typeof privacy,
              },
              {
                title: 'Analytics',
                description: 'Help us improve with anonymous analytics',
                key: 'analytics' as keyof typeof privacy,
              },
            ].map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between py-4 border-b border-primary/10 last:border-b-0"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-primary/60">{item.description}</p>
                </div>
                <label className="relative inline-block w-12 h-6">
                  <input
                    type="checkbox"
                    checked={privacy[item.key]}
                    onChange={(e) =>
                      setPrivacy({ ...privacy, [item.key]: e.target.checked })
                    }
                    className="opacity-0 w-0 h-0"
                  />
                  <span
                    className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all ${
                      privacy[item.key]
                        ? 'bg-gradient-to-r from-primary to-secondary'
                        : 'bg-primary/20'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-dark transition-transform ${
                        privacy[item.key] ? 'translate-x-6' : ''
                      }`}
                    />
                  </span>
                </label>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Data Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-dark rounded-2xl p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Download className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Data Management</h2>
          </div>

          <div className="space-y-4">
            <motion.button
              className="w-full py-3 rounded-lg glass hover:border-primary/50 transition-all font-medium flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
            >
              <Download size={20} />
              <span>Download Your Data</span>
            </motion.button>

            <motion.button
              className="w-full py-3 rounded-lg glass hover:border-primary/50 transition-all font-medium flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
            >
              <Lock size={20} />
              <span>Change Password</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-dark rounded-2xl p-8 border border-accent/30"
        >
          <h2 className="text-2xl font-bold mb-6 text-accent flex items-center space-x-2">
            <span>⚠️</span>
            <span>Danger Zone</span>
          </h2>

          <p className="text-primary/60 mb-6">
            These actions are permanent and cannot be undone.
          </p>

          <motion.button
            className="w-full py-3 rounded-lg bg-accent/20 hover:bg-accent/30 text-accent font-bold transition-all flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Trash2 size={20} />
            <span>Delete Account</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
