'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function Waitlist() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail('')
      setName('')
    }, 1500)
  }

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative glass-card p-12 overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-gold/10 to-primary/10 opacity-50" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                      <Sparkles className="text-primary" size={16} />
                      <span className="text-sm font-medium text-primary">Early Access</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                      Join the <span className="gradient-text">Waitlist</span>
                    </h2>
                    <p className="text-xl text-gray-300">
                      Be among the first to experience Africa's most advanced AI-powered learning platform.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Joining...' : 'Join the Waitlist'}
                    </Button>
                  </form>

                  <p className="text-center text-sm text-gray-400 mt-6">
                    🎁 Early members get exclusive launch bonuses and lifetime discounts
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-primary" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">You're On The List! 🎉</h3>
                  <p className="text-xl text-gray-300 mb-6">
                    We'll notify you as soon as we launch. Get ready to transform your future!
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                  >
                    Add Another Email
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
