'use client';

import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Download, Upload, BarChart3, Clock } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { icon: TrendingUp, label: 'Total Generated', value: '1,234' },
  { icon: Download, label: 'Downloads', value: '456' },
  { icon: Zap, label: 'AI Credits Used', value: '3.2K' },
  { icon: Clock, label: 'Processing Time', value: '2.5h' },
];

const recentProjects = [
  {
    id: 1,
    title: 'YouTube Thumbnail Pack',
    type: 'Thumbnail',
    date: '2 hours ago',
    status: 'completed',
    image: '🎬',
  },
  {
    id: 2,
    title: 'Instagram Caption Batch',
    type: 'Caption',
    date: '4 hours ago',
    status: 'completed',
    image: '✍️',
  },
  {
    id: 3,
    title: 'Product Image Generation',
    type: 'Image',
    date: '1 day ago',
    status: 'completed',
    image: '🖼️',
  },
  {
    id: 4,
    title: 'Social Media Content',
    type: 'Mixed',
    date: '2 days ago',
    status: 'completed',
    image: '📱',
  },
];

const tools = [
  {
    icon: '🎬',
    title: 'Thumbnail Generator',
    description: 'Create eye-catching thumbnails',
    href: '/thumbnail-generator',
    color: 'from-primary to-secondary',
  },
  {
    icon: '✍️',
    title: 'Caption Writer',
    description: 'Generate engaging captions',
    href: '/caption-writer',
    color: 'from-secondary to-accent',
  },
  {
    icon: '🖼️',
    title: 'Image Generator',
    description: 'Create unique images with AI',
    href: '/image-generator',
    color: 'from-accent to-primary',
  },
];

export default function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-bold mb-2">Welcome back! 👋</h1>
          <p className="text-primary/60">Create amazing content with AI today</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-primary/60 bg-primary/10 px-2 py-1 rounded">
                  +12%
                </span>
              </div>
              <p className="text-primary/60 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Tools */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6">Quick Access Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer"
              >
                <Link href={tool.href}>
                  <div className={`glass p-8 rounded-2xl h-full flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all duration-300 relative overflow-hidden`}>
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="relative z-10">
                      <span className="text-5xl mb-4 block">{tool.icon}</span>
                      <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                      <p className="text-primary/60 text-sm">{tool.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Projects */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Projects</h2>
            <Link
              href="#"
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              View all
            </Link>
          </div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <span className="text-4xl">{project.image}</span>
                  <div>
                    <p className="font-bold">{project.title}</p>
                    <p className="text-primary/60 text-sm">
                      {project.type} • {project.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    ✓ {project.status}
                  </span>
                  <Download
                    size={20}
                    className="text-primary/60 group-hover:text-primary transition-colors"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Usage Chart */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6">Usage Analytics</h2>
          <div className="glass p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-primary/60 text-sm">AI Credits This Month</p>
                <p className="text-4xl font-bold">3.2K / 10K</p>
              </div>
              <BarChart3 className="w-12 h-12 text-primary/20" />
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-dark/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                animate={{ width: '32%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <p className="text-primary/60 text-sm mt-4">32% of monthly limit used</p>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
