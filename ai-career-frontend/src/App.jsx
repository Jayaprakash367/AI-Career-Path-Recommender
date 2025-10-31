import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import RecommendationForm from './pages/RecommendationForm'
import Results from './pages/Results'

export default function App(){
  return (
    <div className="min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recommend" element={<RecommendationForm/>} />
        <Route path="/results" element={<Results/>} />
      </Routes>
    </div>
  )
}
