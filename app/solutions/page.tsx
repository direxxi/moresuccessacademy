'use client'

import { motion } from 'framer-motion'
import Solutions from '@/components/sections/Solutions'

export default function SolutionsPage() {
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
              Tailored Learning <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From career advancement to academic excellence, we offer comprehensive 
              learning pathways designed for your specific goals and aspirations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <Solutions />

      {/* Enterprise CTA */}
      <section className="py-24 bg-dark-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-12 text-center">
              <h2 className="text-4xl font-display font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We work with organizations to create tailored learning programs 
                that address specific skill gaps and business objectives.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-dark font-medium rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
