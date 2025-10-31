import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Navbar />
      <main className="pt-8">
        <div className="max-w-6xl mx-auto px-6">
          <Hero />
          <section id="about" className="mt-12 glass p-6 rounded-md">
            <h2 className="text-2xl">How it works</h2>
            <p className="text-gray-300 mt-3">Answer a short multi-step questionnaire. Our Decision Tree model evaluates your interests, skills and grades to suggest top career matches.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
