import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-6 text-center text-gray-400">
      © {new Date().getFullYear()} AI Career Path Recommender • <a href="#">GitHub</a> • <a href="#">LinkedIn</a>
    </footer>
  )
}
