'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Building2,
  Globe,
  Laptop
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const solutions = [
  {
    icon: Briefcase,
    title: 'Career Development',
    description: 'Master in-demand skills like Data Analytics, Cybersecurity, Digital Marketing, and Software Development.',
    features: ['AI-guided learning paths', 'Industry certifications', 'Portfolio building'],
  },
  {
    icon: GraduationCap,
    title: 'Scholarship Preparation',
    description: 'Get ready for international scholarships with personalized guidance on applications, essays, and interviews.',
    features: ['SOP writing support', 'Interview practice', 'University matching'],
  },
  {
    icon: BookOpen,
    title: 'Secondary School Excellence',
    description: 'Excel in your studies with AI tutoring, exam prep, and subject mastery across all disciplines.',
    features: ['Personalized study plans', 'Practice tests', 'Subject experts'],
  },
  {
    icon: Building2,
    title: 'Corporate Training',
    description: 'Upskill your team with customized learning programs designed for African businesses.',
    features: ['Team dashboards', 'Progress tracking', 'Custom content'],
  },
  {
    icon: Globe,
    title: 'English Proficiency',
    description: 'Master business English and communication skills for global opportunities.',
    features: ['Speaking practice', 'Writing feedback', 'Business vocabulary'],
  },
  {
    icon: Laptop,
    title: 'Tech Skills Bootcamp',
    description: 'Intensive, project-based learning for aspiring developers and tech professionals.',
    features: ['Real-world projects', 'Code reviews', 'Job placement support'],
  },
]

export default function Solutions() {
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
            Solutions for <span className="gradient-text">Every Learner</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're advancing your career, preparing for university, or upskilling your team, 
            we have the perfect learning path for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{solution.description}</p>
                  <ul className="space-y-2 mb-4">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button size="lg">Explore All Solutions</Button>
        </motion.div>
      </div>
    </section>
  )
}
