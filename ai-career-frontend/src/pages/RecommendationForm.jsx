import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function RecommendationForm(){
  return (
    <div>
      <Navbar />
      <main className="pt-8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Recommendation Form</h2>
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  )
}
