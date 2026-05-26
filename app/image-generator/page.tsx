'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Sparkles, Download, RefreshCw, Share2 } from 'lucide-react';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('realistic');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const styles = [
    'realistic',
    'cartoon',
    'oil painting',
    'watercolor',
    'cyberpunk',
    'minimalist',
  ];

  const handleGenerate = async () => {
    setLoading(true);
    setTimeout(() => {
      setGenerated(true);
      setLoading(false);
      (window as any).addNotification?.('Image generated successfully!', 'success');
    }, 3000);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2">🖼️ AI Image Generator</h1>
          <p className="text-primary/60">Create unique images from text descriptions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="glass-dark rounded-2xl p-8 space-y-6 sticky top-8">
              <div>
                <label className="block text-sm font-medium mb-3">Describe Your Image</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A futuristic city at sunset with flying cars..."
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg p-4 focus:outline-none focus:border-primary transition-colors h-32 resize-none"
                />
                <p className="text-xs text-primary/60 mt-2">
                  {prompt.length} / 500 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Art Style</label>
                <div className="grid grid-cols-2 gap-3">
                  {styles.map((s) => (
                    <button
                      key={s}
                      onClick={() => setStyle(s)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        style === s
                          ? 'bg-gradient-to-r from-primary to-secondary text-dark'
                          : 'glass hover:border-primary/50'
                      }`}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={handleGenerate}
                disabled={!prompt || loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-dark disabled:opacity-50 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={20} />
                <span>{loading ? 'Creating...' : 'Generate Image'}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Preview Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-dark rounded-2xl p-8">
              {loading ? (
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="mb-4"
                    >
                      <Sparkles className="w-12 h-12 text-primary mx-auto" />
                    </motion.div>
                    <p className="text-primary/60">Creating your image...</p>
                  </div>
                </div>
              ) : generated ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="space-y-6"
                >
                  {/* Image */}
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/30 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-8xl">🎨</span>
                      <p className="text-primary/60 mt-4">{prompt}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-4">
                    <motion.button
                      className="py-3 rounded-lg glass hover:border-primary/50 transition-all font-medium flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Download size={20} />
                      <span className="hidden sm:inline">Download</span>
                    </motion.button>
                    <motion.button
                      className="py-3 rounded-lg glass hover:border-primary/50 transition-all font-medium flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Share2 size={20} />
                      <span className="hidden sm:inline">Share</span>
                    </motion.button>
                    <motion.button
                      onClick={handleGenerate}
                      className="py-3 rounded-lg glass hover:border-primary/50 transition-all font-medium flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <RefreshCw size={20} />
                      <span className="hidden sm:inline">Regenerate</span>
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-12 h-12 text-primary/40" />
                    </div>
                    <p className="text-primary/60 mb-2">Ready to create?</p>
                    <p className="text-sm text-primary/40">
                      Describe the image you want to generate
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
