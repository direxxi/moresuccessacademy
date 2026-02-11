'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users } from 'lucide-react'
import Card from '@/components/ui/Card'

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Leveraging cutting-edge AI to democratize quality education across Africa.',
  },
  {
    icon: Eye,
    title: 'Accessibility',
    description: 'Making world-class learning available to everyone, regardless of background.',
  },
  {
    icon: Heart,
    title: 'Empowerment',
    description: 'Equipping learners with skills that create real economic opportunities.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a supportive network of learners, mentors, and success stories.',
  },
]

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Transforming <span className="gradient-text">African Education</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              More Success Academy is on a mission to bridge the gap between education and 
              employment in Africa through AI-powered, personalized learning experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-dark-card/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  To empower African learners with AI-driven education that's personalized, 
                  practical, and directly aligned with career opportunities. We're building 
                  the bridge between where you are and where you want to be.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  A future where every African has access to world-class education that 
                  transforms their economic prospects. Where learning is adaptive, engaging, 
                  and leads directly to meaningful employment opportunities.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Placeholder */}
      <section className="py-24 bg-dark-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              A passionate group of educators, technologists, and innovators dedicated 
              to revolutionizing education in Africa.
            </p>
            <div className="glass-card p-12">
              <p className="text-gray-400 italic">Team profiles coming soon...</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
