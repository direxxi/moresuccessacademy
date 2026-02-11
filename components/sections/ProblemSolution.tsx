'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import Card from '@/components/ui/Card'

const problems = [
  'Generic learning platforms that don\'t understand African learners',
  'No clear pathway from education to employment',
  'Overwhelming courses without personalized guidance',
  'High costs that create barriers to quality education',
]

const solutions = [
  'AI-powered personalization tailored to your goals and pace',
  'Structured career roadmaps with job-ready skills',
  'Bite-sized, practical courses with instant AI feedback',
  'Affordable pricing designed for accessibility',
]

export default function ProblemSolution() {
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
            The Learning Revolution <span className="gradient-text">Africa Needs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Traditional learning platforms weren't built for our reality. 
            We're changing that with AI-powered education that adapts to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mr-4">
                  <AlertCircle className="text-red-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold">The Problem</h3>
              </div>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Our Solution</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="text-primary mt-0.5 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
