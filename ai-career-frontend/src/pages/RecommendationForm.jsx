import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function RecommendationForm(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Find Your
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Ideal Career Path
              </span>
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Answer our intelligent assessment to receive personalized career recommendations. Takes 10-15 minutes.
            </p>
          </motion.div>

          {/* Form Container */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <Form />
          </div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-orange-50 border-2 border-orange-200 p-6 rounded-xl"
          >
            <div className="flex gap-4">
              <div className="text-2xl">🔒</div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900">Your Data is Safe</h4>
                <p className="text-sm text-gray-700">
                  We use enterprise-grade encryption and never share your personal information. Your assessment data is confidential.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
