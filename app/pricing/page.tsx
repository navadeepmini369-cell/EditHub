'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for trying out',
    features: [
      '5 AI thumbnails/month',
      '10 captions/month',
      '3 images/month',
      'Basic support',
      'Community access',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Creator',
    price: '$29',
    period: '/month',
    description: 'For active content creators',
    features: [
      'Unlimited thumbnails',
      'Unlimited captions',
      '100 images/month',
      'Priority support',
      'Advanced analytics',
      'Download in 4K',
      'Custom branding',
    ],
    cta: 'Start Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For teams and agencies',
    features: [
      'Everything in Creator',
      'Unlimited images',
      'Team management',
      '24/7 dedicated support',
      'Custom API access',
      'Batch processing',
      'White-label options',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const faqs = [
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no penalty.',
  },
  {
    question: 'Do you offer refunds?',
    answer: '30-day money-back guarantee on all paid plans.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers.',
  },
  {
    question: 'Can I upgrade or downgrade?',
    answer: 'Change your plan anytime. We pro-rate charges automatically.',
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-20"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-primary/60 mb-8">
            Choose the perfect plan for your creative journey
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-primary to-secondary text-dark'
                  : 'glass'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-primary to-secondary text-dark'
                  : 'glass'
              }`}
            >
              Yearly
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent text-dark text-xs font-bold px-2 py-1 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-2xl p-8 relative transition-all duration-300 ${
                plan.popular
                  ? 'glass-dark border-primary/50 shadow-2xl shadow-primary/20 scale-105'
                  : 'glass hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-dark px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-primary/60 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-primary/60 text-sm ml-2">{plan.period}</span>
                )}
              </div>

              <motion.button
                className={`w-full py-3 rounded-lg font-bold mb-8 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-secondary text-dark hover:shadow-lg hover:shadow-primary/50'
                    : 'glass hover:bg-primary/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <motion.div
            className="max-w-2xl mx-auto space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6 hover:border-primary/50 transition-all cursor-pointer group"
              >
                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                  {faq.question}
                </h4>
                <p className="text-primary/60 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-dark rounded-3xl p-12 text-center border-primary/30"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-primary/70 mb-8">
            Join thousands of creators using EditHub to level up their content
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark font-bold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Start Free Trial
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
