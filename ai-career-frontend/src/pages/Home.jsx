import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home(){
  const features = [
    {
      icon: '🧠',
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your profile to provide personalized recommendations.',
      color: 'from-orange-50 to-white'
    },
    {
      icon: '📊',
      title: 'Data-Driven Insights',
      description: 'Get detailed career analytics based on market trends, salary data, and job market demands.',
      color: 'from-gray-50 to-white'
    },
    {
      icon: '🎯',
      title: 'Personalized Paths',
      description: 'Tailored career recommendations matching your skills, interests, and educational background.',
      color: 'from-orange-50 to-white'
    },
    {
      icon: '📈',
      title: 'Growth Tracking',
      description: 'Monitor your career progression with real-time insights and skill development recommendations.',
      color: 'from-gray-50 to-white'
    },
    {
      icon: '🌐',
      title: 'Global Opportunities',
      description: 'Explore career paths across industries and geographies with international job market data.',
      color: 'from-orange-50 to-white'
    },
    {
      icon: '🤝',
      title: 'Expert Guidance',
      description: 'Access industry insights and mentorship to guide your career journey with confidence.',
      color: 'from-gray-50 to-white'
    },
  ]

  const howItWorks = [
    {
      step: 1,
      title: 'Complete Assessment',
      description: 'Answer comprehensive questions about your skills, interests, and career aspirations.'
    },
    {
      step: 2,
      title: 'AI Analysis',
      description: 'Our machine learning model processes your data with thousands of career profiles.'
    },
    {
      step: 3,
      title: 'Get Recommendations',
      description: 'Receive personalized career recommendations with detailed insights and action plans.'
    },
    {
      step: 4,
      title: 'Execute & Grow',
      description: 'Follow recommendations and track your progress towards your ideal career.'
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Career Transition Success',
      image: '👩‍💼',
      text: 'CareerAI helped me pivot from finance to tech. The recommendations were spot-on and the guidance invaluable!',
      company: 'Tech Startup'
    },
    {
      name: 'Michael Chen',
      role: 'Recent Graduate',
      image: '👨‍🎓',
      text: 'As a fresh graduate, I was lost. This platform gave me clarity and confidence about my career direction.',
      company: 'Fortune 500'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Mid-Career Professional',
      image: '👩‍💻',
      text: 'The AI insights about market demands helped me upskill strategically and landed my dream role!',
      company: 'Consulting Firm'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Powerful Features for Career Success</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">>
              Comprehensive tools and insights designed to accelerate your career growth and success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${feature.color} border border-gray-200 hover:border-orange-400 shadow-md hover:shadow-lg p-10 rounded-lg transition-all duration-300`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">How It Works</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Four simple steps to discover your perfect career path
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-4 gap-6"
          >
            {howItWorks.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative">
                <div className="bg-white border-2 border-gray-200 p-10 rounded-lg text-center shadow-md hover:shadow-lg hover:border-orange-300 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-3 text-xl text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{item.description}</p>
                </div>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Trusted by Professionals</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              See how thousands of professionals transformed their careers with CareerAI
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-orange-300 p-10 rounded-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-base text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 text-base leading-relaxed italic">\u201c{testimonial.text}\u201d</p>
                <p className="text-base text-orange-600 font-semibold">{testimonial.company}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 bg-white relative overflow-hidden border-t-2 border-b-2 border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-orange-100/50"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">Ready to Transform Your Career?</h2>
          <p className="text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who've discovered their perfect career path with AI-powered insights
          </p>
          <Link to="/recommend">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xl rounded-lg shadow-xl hover:shadow-2xl hover:scale-108 transition-all duration-300"
            >
              Start Your Free Assessment Now
            </motion.button>
          </Link>
          <p className="text-gray-700 text-base mt-6 font-medium">No credit card required • Takes 5-10 minutes</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
