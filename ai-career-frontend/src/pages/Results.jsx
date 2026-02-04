import React, {useState} from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import ResultCard from '../components/ResultCard'
import Charts from '../components/Charts'
import Footer from '../components/Footer'

// Comprehensive career details database
const careerDetails = {
  "AI Engineer": {
    description: "Design and develop artificial intelligence systems, machine learning models, and intelligent applications. Work on cutting-edge technologies like deep learning, NLP, and computer vision.",
    skills: ["Python", "TensorFlow/PyTorch", "Machine Learning", "Deep Learning", "Mathematics"],
    education: "Bachelor's or Master's in CS/AI",
    salary: "$120k - $180k",
    growth: "Very High (35% over 5 years)",
    workLife: "Good - Flexible, mostly remote options"
  },
  "Data Scientist": {
    description: "Analyze complex data sets to extract insights, build predictive models, and drive data-driven decision making. Combine statistics, programming, and domain expertise.",
    skills: ["Python/R", "SQL", "Statistics", "Machine Learning", "Data Visualization"],
    education: "Bachelor's or Master's in Stats/Math/CS",
    salary: "$100k - $160k",
    growth: "Very High (31% over 5 years)",
    workLife: "Good - Standard hours, some remote"
  },
  "Software Engineer": {
    description: "Design, develop, test, and maintain software applications and systems. Work on web, mobile, or desktop applications across various industries.",
    skills: ["Programming Languages", "Git", "Algorithms", "System Design", "Problem Solving"],
    education: "Bachelor's in Computer Science",
    salary: "$90k - $150k",
    growth: "High (25% over 5 years)",
    workLife: "Very Good - Flexible, remote friendly"
  },
  "UI/UX Designer": {
    description: "Create intuitive and visually appealing user interfaces and experiences. Conduct user research, wireframing, prototyping, and usability testing.",
    skills: ["Figma/Sketch", "Prototyping", "User Research", "Visual Design", "HTML/CSS"],
    education: "Bachelor's in Design/HCI",
    salary: "$75k - $130k",
    growth: "High (23% over 5 years)",
    workLife: "Excellent - Creative freedom, flexible"
  },
  "Product Manager": {
    description: "Define product vision, strategy, and roadmap. Work with cross-functional teams to deliver products that meet market needs and business goals.",
    skills: ["Strategy", "Communication", "Analytics", "Leadership", "Agile/Scrum"],
    education: "Bachelor's (any field) + MBA preferred",
    salary: "$110k - $170k",
    growth: "High (20% over 5 years)",
    workLife: "Moderate - Can be demanding"
  },
  "Data Engineer": {
    description: "Build and maintain data pipelines, warehouses, and infrastructure. Enable data scientists and analysts to access and process data efficiently.",
    skills: ["SQL", "Python", "ETL", "Cloud (AWS/GCP)", "Big Data Tools"],
    education: "Bachelor's in CS/Engineering",
    salary: "$105k - $155k",
    growth: "Very High (30% over 5 years)",
    workLife: "Good - Standard tech hours"
  },
  "Cybersecurity Analyst": {
    description: "Protect organizations from cyber threats by monitoring networks, implementing security measures, and responding to security incidents.",
    skills: ["Network Security", "Penetration Testing", "SIEM", "Compliance", "Risk Analysis"],
    education: "Bachelor's in CS/Cybersecurity",
    salary: "$85k - $140k",
    growth: "Very High (35% over 5 years)",
    workLife: "Moderate - On-call responsibilities"
  },
  "Full Stack Developer": {
    description: "Work on both frontend and backend development. Build complete web applications from database to user interface.",
    skills: ["JavaScript", "React/Node.js", "Databases", "APIs", "DevOps"],
    education: "Bachelor's in CS or Bootcamp",
    salary: "$95k - $145k",
    growth: "High (22% over 5 years)",
    workLife: "Very Good - Remote friendly"
  },
  "Machine Learning Engineer": {
    description: "Develop and deploy machine learning models at scale. Bridge the gap between data science and software engineering.",
    skills: ["Python", "ML Frameworks", "MLOps", "Cloud", "Software Engineering"],
    education: "Master's in CS/ML preferred",
    salary: "$125k - $185k",
    growth: "Very High (40% over 5 years)",
    workLife: "Good - Challenging but rewarding"
  },
  "DevOps Engineer": {
    description: "Automate and optimize software development lifecycle. Manage CI/CD pipelines, infrastructure, and deployment processes.",
    skills: ["Docker/Kubernetes", "CI/CD", "Cloud", "Scripting", "Linux"],
    education: "Bachelor's in CS/IT",
    salary: "$100k - $150k",
    growth: "Very High (28% over 5 years)",
    workLife: "Moderate - On-call rotation"
  },
  "Graphic Designer": {
    description: "Create visual content for print and digital media. Design logos, branding materials, marketing collateral, and digital assets.",
    skills: ["Adobe Creative Suite", "Typography", "Branding", "Color Theory", "Layout"],
    education: "Bachelor's in Graphic Design",
    salary: "$50k - $85k",
    growth: "Moderate (13% over 5 years)",
    workLife: "Excellent - Creative work"
  },
  "Content Creator": {
    description: "Produce engaging content for digital platforms including videos, blogs, social media, and multimedia. Build audience and brand presence.",
    skills: ["Video Editing", "Writing", "Social Media", "SEO", "Storytelling"],
    education: "Variable - Portfolio matters most",
    salary: "$45k - $100k+ (highly variable)",
    growth: "High (growing industry)",
    workLife: "Excellent - Flexible, creative"
  },
  "Business Analyst": {
    description: "Analyze business processes and requirements to identify opportunities for improvement. Bridge gap between business and IT.",
    skills: ["Data Analysis", "SQL", "Communication", "Process Modeling", "Requirements Gathering"],
    education: "Bachelor's in Business/IT",
    salary: "$70k - $120k",
    growth: "Moderate (14% over 5 years)",
    workLife: "Good - Standard business hours"
  },
  "Product Designer": {
    description: "Design end-to-end product experiences combining UX research, interaction design, and visual design. Shape product strategy through design.",
    skills: ["UX/UI Design", "Prototyping", "User Research", "Design Systems", "Collaboration"],
    education: "Bachelor's in Design/HCI",
    salary: "$85k - $140k",
    growth: "High (25% over 5 years)",
    workLife: "Very Good - Creative autonomy"
  }
}

export default function Results(){
  const { state } = useLocation()
  const result = state?.result || {recommendations: []}
  const form = state?.form || {}
  const [modal, setModal] = useState(null)

  function onLearn(career){
    setModal(career)
  }
  
  const modalData = modal ? (careerDetails[modal] || {
    description: "This career path offers exciting opportunities for growth and development.",
    skills: ["Domain Knowledge", "Problem Solving", "Communication"],
    education: "Varies by field",
    salary: "$60k - $120k",
    growth: "Moderate",
    workLife: "Good"
  }) : null

  return (
    <div>
      <Navbar />
      <main className="pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2 text-gray-900">🎯 Your Career Recommendations</h1>
            <p className="text-gray-700">Based on your skills, interests, and preferences</p>
          </div>

          {/* User summary */}
          {form && form.name && (
            <div className="bg-white border-2 border-gray-200 p-4 rounded-md mb-6 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{form.name}</h3>
                  <p className="text-sm text-gray-700">{form.current_role || '—'} • {form.years_experience || 0} yrs experience</p>
                </div>
                <div className="text-sm text-gray-700">
                  <div>Preferred Industry: <span className="font-medium text-orange-600">{form.preferred_industry || 'Any'}</span></div>
                  <div>Location: <span className="font-medium text-orange-600">{form.preferred_location || 'Any'}</span></div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Recommendations */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Top Matches</h2>
              <div className="space-y-4">
                {result.recommendations?.length > 0 ? (
                  result.recommendations.map((r, idx)=> (
                    <ResultCard key={idx} career={r.career} confidence={r.confidence} onLearn={onLearn} rank={idx + 1} />
                  ))
                ) : (
                  <div className="bg-white border-2 border-gray-200 p-6 rounded-md text-center">
                    <p className="text-gray-700">No recommendations found. Please try again.</p>
                    <Link to="/recommend" className="inline-block mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">Go Back</Link>
                  </div>
                )}
              </div>
            </div>

            {/* Chart & Stats */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Match Analysis</h3>
              {result.recommendations?.length > 0 && (
                <>
                  <Charts data={result.recommendations || []} />
                  <div className="bg-white border-2 border-gray-200 p-4 rounded-md mt-4">
                    <h4 className="font-semibold mb-3 text-gray-900">Quick Stats</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Best Match:</span>
                        <span className="font-medium text-orange-600">{result.recommendations[0]?.career}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Confidence:</span>
                        <span className="font-medium text-green-600">{(result.recommendations[0]?.confidence * 100).toFixed(0)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Total Analyzed:</span>
                        <span className="font-medium text-gray-900">36 careers</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/recommend" className="block w-full mt-4 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded text-center transition font-semibold">
                    ← Retake Assessment
                  </Link>
                </>
              )}
            </div>
          </div>

        </div>

        {/* Modal */}
        {modal && modalData && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{modal}</h3>
                  <p className="text-gray-600 text-sm mt-1">Career Path Details & Insights</p>
                </div>
                <button onClick={()=>setModal(null)} className="text-gray-600 hover:text-gray-900 text-3xl hover:bg-gray-200 p-2 rounded-lg transition">×</button>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{modalData.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg border border-orange-300">
                  <h4 className="font-semibold mb-2 text-orange-700 flex items-center gap-2">💰 Salary Range</h4>
                  <p className="text-gray-900 text-lg font-semibold">{modalData.salary}</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border border-green-300">
                  <h4 className="font-semibold mb-2 text-green-700 flex items-center gap-2">📈 Job Growth</h4>
                  <p className="text-gray-900 text-lg font-semibold">{modalData.growth}</p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-5 rounded-lg border border-yellow-300">
                  <h4 className="font-semibold mb-2 text-yellow-700 flex items-center gap-2">🎓 Education</h4>
                  <p className="text-gray-900">{modalData.education}</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-300">
                  <h4 className="font-semibold mb-2 text-blue-700 flex items-center gap-2">⚖️ Work-Life Balance</h4>
                  <p className="text-gray-900">{modalData.workLife}</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg border border-orange-300 mb-6">
                <h4 className="font-semibold mb-3 text-orange-700 flex items-center gap-2">🛠️ Key Skills Required</h4>
                <div className="flex flex-wrap gap-2">
                  {modalData.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-white border-2 border-orange-300 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-100 transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex gap-3">
                <motion.button 
                  onClick={()=>setModal(null)} 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-3 bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-lg transition font-semibold"
                >
                  Close
                </motion.button>
                <motion.a 
                  href={`https://www.google.com/search?q=${encodeURIComponent(modal + ' career path')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/50 text-white rounded-lg text-center transition font-semibold"
                >
                  Learn More Online →
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}

      </main>
      <Footer />
    </div>
  )
}

