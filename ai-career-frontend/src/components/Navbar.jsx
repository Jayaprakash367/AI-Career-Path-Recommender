import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar(){
  return (
    <motion.nav initial={{y:-50, opacity:0}} animate={{y:0, opacity:1}} className="sticky top-0 z-50 bg-transparent backdrop-blur-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">AI Career Path</Link>
        <div className="space-x-6">
          <Link to="/" className="text-sm">Home</Link>
          <Link to="/recommend" className="text-sm">Get Recommendation</Link>
          <a href="#about" className="text-sm">About</a>
          <a href="#contact" className="text-sm">Contact</a>
        </div>
      </div>
    </motion.nav>
  )
}
