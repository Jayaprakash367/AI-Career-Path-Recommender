import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CareerNetworkVisual from './CareerNetworkVisual'

export default function Hero(){
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-12 pb-20">
      {/* Animated background elements - Cyan and Purple */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-600/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-orange-50 border border-orange-400 text-orange-600 text-sm font-semibold rounded-full">
                  🚀 AI-Powered Career Intelligence
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900">
                Find Your
                <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-600 bg-clip-text text-transparent">
                  Perfect Career
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-lg font-medium">
                Powered by advanced machine learning, our platform analyzes your skills, interests, and aspirations to recommend ideal career paths tailored just for you.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/recommend">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 213, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
                >
                  Start Free Consultation
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-2 border-slate-900"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-slate-900"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-slate-900"></div>
                </div>
                <span>2000+ Users Trusted</span>
              </div>
              <span className="flex items-center gap-1 text-gray-700">⭐ 4.9/5 Average Rating</span>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            <CareerNetworkVisual />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
