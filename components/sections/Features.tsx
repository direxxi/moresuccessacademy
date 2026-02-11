'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Brain, 
  Target, 
  Zap, 
  Users, 
  TrendingUp, 
  Award 
} from 'lucide-react'
import Card from '@/components/ui/Card'

const features = [
  {
    icon: Brain,
    title: 'AI Personal Tutor',
    description: 'Your 24/7 learning companion that adapts to your pace, answers questions, and guides you through every step.',
  },
  {
    icon: Target,
    title: 'Career Pathways',
    description: 'Clear roadmaps showing exactly what skills you need for roles like Data Analyst, Cybersecurity Expert, and more.',
  },
  {
    icon: Zap,
    title: 'Micro-Learning',
    description: 'Bite-sized lessons designed for busy schedules. Learn in 5-15 minute chunks, anytime, anywhere.',
  },
  {
    icon: Users,
    title: 'Community & Mentorship',
    description: 'Connect with peers, join study groups, and learn from experienced mentors in your field.',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Progress',
    description: 'Track your growth with AI-powered insights and recommendations on what to learn next.',
  },
  {
    icon: Award,
    title: 'Recognized Certificates',
    description: 'Earn industry-recognized credentials that open doors to opportunities across Africa and beyond.',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Powered by <span className="gradient-text">Intelligent Technology</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every feature is designed with one goal: making world-class education 
            accessible, personalized, and effective for African learners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Central graphic element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-gold rounded-full opacity-20 blur-3xl animate-pulse-glow" />
            <div className="absolute inset-8 glass-card rounded-full flex items-center justify-center">
              <Brain className="text-primary" size={80} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
