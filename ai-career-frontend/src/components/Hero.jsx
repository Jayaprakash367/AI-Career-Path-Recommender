import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}} className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">Discover Your Perfect Career Path with AI</h1>
          <p className="text-gray-300 max-w-2xl">Answer a few questions and our AI-powered recommender will suggest career paths tailored to your interests and strengths.</p>
          <Link to="/recommend" className="inline-block mt-4">
            <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 rounded-md bg-indigo-600 button-glow">Get Started</motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
