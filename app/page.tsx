'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Download,
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI Thumbnail Generator',
    description: 'Create stunning thumbnails with AI in seconds',
  },
  {
    icon: 'Type',
    title: 'Caption Writer',
    description: 'Generate engaging captions for your content',
  },
  {
    icon: 'Image',
    title: 'Image Generator',
    description: 'Create unique images from text descriptions',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process your content in real-time',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is encrypted and protected',
  },
  {
    icon: TrendingUp,
    title: 'Analytics',
    description: 'Track your content performance',
  },
];

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Content Creator',
    message: 'EditHub has tripled my content creation speed!',
    avatar: '👨‍💼',
  },
  {
    name: 'Sarah Johnson',
    role: 'YouTuber',
    message: 'The AI tools are incredibly intuitive and powerful.',
    avatar: '👩‍💼',
  },
  {
    name: 'Mike Davis',
    role: 'Social Media Manager',
    message: 'Best investment for our content team this year.',
    avatar: '👨‍💼',
  },
];

function TypeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M4 7h16M4 12h16M4 17h16" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

function ImageIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
      <polyline points="21 15 16 10 5 21" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-dark/50 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.h1
            className="text-2xl font-bold gradient-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            EditHub
          </motion.h1>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-medium text-dark text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="px-4 py-2 glass rounded-full text-sm font-medium text-primary border border-primary/30">
              🚀 AI-Powered Creation Platform
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Create Content Like a<br />
            <span className="gradient-text">Professional Creator</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-primary/70 mb-8 max-w-2xl mx-auto"
          >
            EditHub uses advanced AI to help you generate thumbnails, write captions, and create images 10x faster.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/signup"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-dark flex items-center space-x-2 group"
            >
              <span>Start Creating Free</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              href="/pricing"
              className="px-8 py-4 rounded-lg glass hover:bg-primary/10 transition-all duration-300 font-medium flex items-center space-x-2"
            >
              <span>View Pricing</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 text-center"
          >
            <div>
              <p className="text-3xl font-bold gradient-text">50K+</p>
              <p className="text-primary/60 text-sm mt-2">Active Creators</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">1M+</p>
              <p className="text-primary/60 text-sm mt-2">Content Generated</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">24/7</p>
              <p className="text-primary/60 text-sm mt-2">AI Processing</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold mb-4">Powerful Features</h3>
            <p className="text-primary/70 text-lg">Everything you need to create amazing content</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              let FeatureIcon = feature.icon as any;
              if (feature.icon === 'Type') FeatureIcon = TypeIcon;
              if (feature.icon === 'Image') FeatureIcon = ImageIcon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group glass p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <FeatureIcon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-primary/60">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-4xl font-bold mb-4">Loved by Creators</h3>
            <p className="text-primary/70 text-lg">Join thousands of content creators</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-8 rounded-2xl"
              >
                <p className="text-primary/80 mb-6 text-lg">"{testimonial.message}"</p>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{testimonial.avatar}</span>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-primary/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto glass-dark rounded-3xl p-12 text-center border-primary/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold mb-4">Ready to Level Up?</h3>
            <p className="text-primary/70 mb-8 text-lg">
              Join EditHub today and create content 10x faster with AI
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-bold text-dark"
            >
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-primary/60 text-sm">
                <li><Link href="/pricing" className="hover:text-primary transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Features</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Updates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-primary/60 text-sm">
                <li><Link href="#" className="hover:text-primary transition">About</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-primary/60 text-sm">
                <li><Link href="#" className="hover:text-primary transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Terms</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Social</h4>
              <ul className="space-y-2 text-primary/60 text-sm">
                <li><a href="#" className="hover:text-primary transition">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary/60 text-sm">© 2024 EditHub. All rights reserved.</p>
            <p className="text-primary/60 text-sm mt-4 md:mt-0">Made with ❤️ for creators</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
