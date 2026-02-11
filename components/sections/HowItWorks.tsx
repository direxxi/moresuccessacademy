'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { UserPlus, Target, BookOpen, Rocket } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up & Set Goals',
    description: 'Tell us about your aspirations, current skills, and dream career. Our AI creates your personalized learning journey.',
    color: 'from-primary to-primary-light',
  },
  {
    icon: Target,
    title: 'Get Your Roadmap',
    description: 'Receive a clear, step-by-step pathway showing exactly what to learn and in what order to reach your goals.',
    color: 'from-primary-light to-gold',
  },
  {
    icon: BookOpen,
    title: 'Learn & Practice',
    description: 'Complete bite-sized lessons, hands-on projects, and real-world case studies with 24/7 AI support.',
    color: 'from-gold to-gold-light',
  },
  {
    icon: Rocket,
    title: 'Launch Your Career',
    description: 'Build your portfolio, earn certificates, and get matched with opportunities that align with your new skills.',
    color: 'from-gold-light to-primary',
  },
]

export default function HowItWorks() {
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
            Your Journey to <span className="gradient-text">Success</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From beginner to job-ready professional in four simple steps.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-16 last:mb-0"
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${step.color} p-1 group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                        <Icon className="text-white" size={40} />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
