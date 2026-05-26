'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, AlertCircle, Info } from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString();
    setNotifications((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 4000);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Expose globally for easy access
  React.useEffect(() => {
    (window as any).addNotification = addNotification;
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className={`glass px-4 py-3 rounded-lg flex items-center space-x-3 min-w-xs max-w-md ${
              notification.type === 'success'
                ? 'border-l-4 border-primary'
                : notification.type === 'error'
                ? 'border-l-4 border-accent'
                : 'border-l-4 border-secondary'
            }`}
          >
            {notification.type === 'success' && (
              <Check size={20} className="text-primary flex-shrink-0" />
            )}
            {notification.type === 'error' && (
              <AlertCircle size={20} className="text-accent flex-shrink-0" />
            )}
            {notification.type === 'info' && (
              <Info size={20} className="text-secondary flex-shrink-0" />
            )}

            <span className="flex-1 text-sm">{notification.message}</span>

            <button
              onClick={() => removeNotification(notification.id)}
              className="text-primary/50 hover:text-primary transition-colors"
            >
              <X size={18} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
