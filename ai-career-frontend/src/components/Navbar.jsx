import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav 
      initial={{y:-50, opacity:0}} 
      animate={{y:0, opacity:1}} 
      className="sticky top-0 z-50 bg-white backdrop-blur-xl py-4 px-6 border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <img src="/favicon.svg" alt="AI Career Path" className="relative w-10 h-10 rounded-lg" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              CareerAI
            </span>
            <span className="text-xs text-orange-500/70">Platform</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200">
            Home
          </Link>
        </div>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/recommend">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-200"
            >
              Get Started Free
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-cyan-500/10 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 pb-4 space-y-2 border-t border-orange-200 pt-4"
        >
          <Link to="/" className="block px-3 py-2 text-sm text-gray-700 hover:text-orange-600 rounded-lg hover:bg-orange-50">Home</Link>
          <Link to="/recommend" className="block w-full mt-4 px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-lg text-center">
            Get Started Free
          </Link>
        </motion.div>
      )}
    </motion.nav>
  )
}
