'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, Send } from 'lucide-react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions? Want to partner with us? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-400 text-sm">info@moresuccessacademy.com</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-primary transition-colors"
                    >
                      Follow us on LinkedIn
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-400 text-sm">Serving learners across Africa</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Your Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <Input
                      label="Subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-dark-card/50 backdrop-blur-sm border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="Tell us more about your inquiry..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full group"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : (
                        <>
                          Send Message
                          <Send className="ml-2 inline group-hover:translate-x-1 transition-transform" size={18} />
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                      <Send className="text-primary" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent! ✓</h3>
                    <p className="text-gray-300">
                      We'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
