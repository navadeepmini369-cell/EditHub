'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Upload, Download, RefreshCw, Sparkles, Copy } from 'lucide-react';

export default function ThumbnailGenerator() {
  const [title, setTitle] = useState('');
  const [style, setStyle] = useState('modern');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const styles = ['modern', 'retro', 'gaming', 'minimalist', 'bold', 'cinematic'];

  const handleGenerate = async () => {
    setLoading(true);
    setTimeout(() => {
      setGenerated(true);
      setLoading(false);
      (window as any).addNotification?.('Thumbnail generated successfully!', 'success');
    }, 2000);
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
          <h1 className="text-4xl font-bold mb-2">🎬 AI Thumbnail Generator</h1>
          <p className="text-primary/60">Create stunning thumbnails that grab attention</p>
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
                <label className="block text-sm font-medium mb-3">Thumbnail Title</label>
                <textarea
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your thumbnail title..."
                  className="w-full bg-dark/50 border border-primary/20 rounded-lg p-4 focus:outline-none focus:border-primary transition-colors h-24 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Style</label>
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

              <div>
                <label className="block text-sm font-medium mb-3">Upload Image (Optional)</label>
                <div className="border-2 border-dashed border-primary/20 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                  <Upload className="w-8 h-8 text-primary/60 group-hover:text-primary mx-auto mb-2 transition-colors" />
                  <p className="text-sm font-medium">Click to upload</p>
                  <p className="text-xs text-primary/60 mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <motion.button
                onClick={handleGenerate}
                disabled={!title || loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-dark disabled:opacity-50 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={20} />
                <span>{loading ? 'Generating...' : 'Generate Thumbnail'}</span>
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
            <div className="glass-dark rounded-2xl p-8 h-full flex items-center justify-center min-h-96">
              {generated ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full space-y-6"
                >
                  {/* Thumbnail Preview */}
                  <div className="relative w-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden aspect-video flex items-center justify-center border border-primary/30">
                    <div className="text-center">
                      <Sparkles className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                      <p className="text-primary/60">{title}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      className="py-3 rounded-lg glass hover:border-primary/50 transition-all font-medium flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Download size={20} />
                      <span>Download</span>
                    </motion.button>
                    <motion.button
                      className="py-3 rounded-lg glass hover:border-primary/50 transition-all font-medium flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <RefreshCw size={20} />
                      <span>Regenerate</span>
                    </motion.button>
                  </div>

                  {/* Copy URL */}
                  <motion.button
                    className="w-full py-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all font-medium flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Copy size={20} />
                    <span>Copy Share Link</span>
                  </motion.button>
                </motion.div>
              ) : (
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-12 h-12 text-primary/40" />
                  </div>
                  <p className="text-primary/60 mb-2">Ready to create your thumbnail?</p>
                  <p className="text-sm text-primary/40">Fill in the details and click generate</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
