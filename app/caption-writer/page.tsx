'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Sparkles, Copy, RefreshCw, Share2 } from 'lucide-react';

const platforms = [
  { name: 'Instagram', limit: 2200, icon: '📸' },
  { name: 'Twitter', limit: 280, icon: '𝕏' },
  { name: 'TikTok', limit: 2200, icon: '🎵' },
  { name: 'LinkedIn', limit: 3000, icon: '💼' },
  { name: 'YouTube', limit: 5000, icon: '▶️' },
];

export default function CaptionWriter() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [platform, setPlatform] = useState('Instagram');
  const [loading, setLoading] = useState(false);
  const [captions, setCaptions] = useState<string[]>([]);

  const tones = ['professional', 'casual', 'funny', 'inspirational', 'promotional'];

  const handleGenerate = async () => {
    setLoading(true);
    setTimeout(() => {
      setCaptions([
        '🌟 Amazing caption 1 #content #creator',
        '✨ Engaging caption 2 #social #media',
        '🚀 Creative caption 3 #marketing #growth',
      ]);
      setLoading(false);
      (window as any).addNotification?.('Captions generated successfully!', 'success');
    }, 2000);
  };

  const selectedPlatform = platforms.find((p) => p.name === platform);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">✍️ AI Caption Writer</h1>
          <p className="text-primary/60">Generate engaging captions for all platforms</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="glass-dark rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">Topic/Description</label>
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="What's your content about?"
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg p-4 focus:outline-none focus:border-primary transition-colors h-24 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Tone</label>
                <div className="space-y-2">
                  {tones.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 text-left ${
                        tone === t
                          ? 'bg-gradient-to-r from-primary to-secondary text-dark'
                          : 'glass hover:border-primary/50'
                      }`}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Platform</label>
                <div className="space-y-2">
                  {platforms.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => setPlatform(p.name)}
                      className={`w-full py-3 px-3 rounded-lg text-sm font-medium transition-all duration-300 text-left flex items-center justify-between ${
                        platform === p.name
                          ? 'bg-gradient-to-r from-primary to-secondary text-dark'
                          : 'glass hover:border-primary/50'
                      }`}
                    >
                      <span>{p.icon} {p.name}</span>
                      <span className="text-xs opacity-70">{p.limit}c</span>
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={handleGenerate}
                disabled={!topic || loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-dark disabled:opacity-50 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={20} />
                <span>{loading ? 'Writing...' : 'Generate Captions'}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Output Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-dark rounded-2xl p-8 space-y-6">
              {captions.length > 0 ? (
                <>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Generated Captions</h3>
                    <span className="text-sm text-primary/60">
                      Max {selectedPlatform?.limit} characters
                    </span>
                  </div>

                  <motion.div
                    className="space-y-4"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {captions.map((caption, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-dark/50 rounded-xl p-4 border border-primary/20 hover:border-primary/50 transition-colors group"
                      >
                        <p className="text-sm mb-3">{caption}</p>
                        <div className="flex items-center justify-between text-xs text-primary/60">
                          <span>{caption.length} / {selectedPlatform?.limit}</span>
                          <motion.button
                            onClick={() => (window as any).addNotification?.('Copied to clipboard!', 'success')}
                            className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 text-primary hover:text-primary/80"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Copy size={14} />
                            <span>Copy</span>
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="flex gap-4 pt-4">
                    <motion.button
                      onClick={handleGenerate}
                      className="flex-1 py-3 rounded-lg glass hover:border-primary/50 transition-all font-medium flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <RefreshCw size={20} />
                      <span>Regenerate</span>
                    </motion.button>
                    <motion.button
                      className="flex-1 py-3 rounded-lg glass hover:border-primary/50 transition-all font-medium flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Share2 size={20} />
                      <span>Share</span>
                    </motion.button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-12 h-12 text-primary/40" />
                  </div>
                  <p className="text-primary/60 mb-2">No captions generated yet</p>
                  <p className="text-sm text-primary/40">Fill in the details and generate</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
