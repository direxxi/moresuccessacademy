'use client'

import { motion } from 'framer-motion'
import HowItWorks from '@/components/sections/HowItWorks'
import { 
  Brain, 
  MessageSquare, 
  BarChart, 
  Award,
  Users,
  Zap
} from 'lucide-react'
import Card from '@/components/ui/Card'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Personalization',
    description: 'Our AI analyzes your learning style, pace, and goals to create a unique path tailored just for you.',
  },
  {
    icon: MessageSquare,
    title: 'Interactive Learning',
    description: 'Ask questions anytime, get instant feedback, and engage with content that adapts to your understanding.',
  },
  {
    icon: BarChart,
    title: 'Progress Tracking',
    description: 'See exactly how far you\'ve come with detailed analytics and skill assessments.',
  },
  {
    icon: Award,
    title: 'Recognized Certifications',
    description: 'Earn credentials that employers value and that open doors to new opportunities.',
  },
  {
    icon: Users,
    title: 'Peer Learning',
    description: 'Connect with fellow learners, join study groups, and learn from shared experiences.',
  },
  {
    icon: Zap,
    title: 'Hands-On Projects',
    description: 'Build real-world projects that demonstrate your skills and populate your portfolio.',
  },
]

export default function HowItWorksPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Learning Designed <span className="gradient-text">for Success</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover how our AI-powered platform transforms the way you learn, 
              making education more personal, practical, and effective.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main How It Works Section */}
      <HowItWorks />

      {/* Platform Features */}
      <section className="py-24 bg-dark-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Platform <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to succeed, all in one intelligent platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
