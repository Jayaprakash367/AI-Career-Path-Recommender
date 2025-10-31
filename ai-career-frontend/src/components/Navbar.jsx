import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar(){
  return (
    <motion.nav initial={{y:-50, opacity:0}} animate={{y:0, opacity:1}} className="sticky top-0 z-50 bg-transparent backdrop-blur-md py-4 px-6 border-b border-indigo-500/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo with Icon */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/favicon.svg" alt="AI Career Path Logo" className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
            AI Career Path
          </span>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm hover:text-indigo-400 transition-colors duration-200">Home</Link>
          <Link to="/recommend" className="text-sm hover:text-indigo-400 transition-colors duration-200">Get Recommendation</Link>
          <a href="#about" className="text-sm hover:text-indigo-400 transition-colors duration-200">About</a>
          <a href="#contact" className="text-sm hover:text-indigo-400 transition-colors duration-200">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}
