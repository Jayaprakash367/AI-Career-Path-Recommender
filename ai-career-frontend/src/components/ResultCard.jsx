import React from 'react'
import { motion } from 'framer-motion'

export default function ResultCard({career, confidence, onLearn, rank}){
  const getRankBadge = () => {
    if (rank === 1) return {emoji: '🥇', color: 'bg-yellow-500/20 border-yellow-500', text: 'Best Match'}
    if (rank === 2) return {emoji: '🥈', color: 'bg-gray-400/20 border-gray-400', text: '2nd Match'}
    if (rank === 3) return {emoji: '🥉', color: 'bg-orange-500/20 border-orange-500', text: '3rd Match'}
    return {emoji: '📌', color: 'bg-indigo-500/20 border-cyan-500', text: `#${rank}`}
  }
  
  const badge = getRankBadge()
  const confidencePercent = (confidence * 100).toFixed(0)
  
  return (
    <motion.div 
      whileHover={{y:-4, scale:1.02}} 
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.3, delay: (rank-1) * 0.1}}
      className="glass p-5 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-2 py-1 rounded text-xs border ${badge.color} font-semibold`}>
              {badge.emoji} {badge.text}
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-2">{career}</h3>
          
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Match Confidence</span>
              <span className="font-semibold text-cyan-400">{confidencePercent}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                initial={{width: 0}}
                animate={{width: `${confidencePercent}%`}}
                transition={{duration: 0.8, delay: (rank-1) * 0.1 + 0.2}}
                className="h-full bg-gradient-to-r from-cyan-500 to-cyan-500"
              />
            </div>
          </div>
        </div>
        
        <div>
          <button 
            onClick={()=>onLearn(career)} 
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md text-sm font-medium transition button-glow"
          >
            Details →
          </button>
        </div>
      </div>
    </motion.div>
  )
}
