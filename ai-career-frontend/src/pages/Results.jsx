import React, {useState} from 'react'
import { useLocation, Link } from 'react-router-dom'
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
            <h1 className="text-4xl font-bold mb-2">🎯 Your Career Recommendations</h1>
            <p className="text-gray-400">Based on your skills, interests, and preferences</p>
          </div>

          {/* User summary */}
          {form && form.name && (
            <div className="glass p-4 rounded-md mb-6 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{form.name}</h3>
                  <p className="text-sm text-gray-300">{form.current_role || '—'} • {form.years_experience || 0} yrs experience</p>
                </div>
                <div className="text-sm text-gray-300">
                  <div>Preferred Industry: <span className="font-medium text-indigo-300">{form.preferred_industry || 'Any'}</span></div>
                  <div>Location: <span className="font-medium text-indigo-300">{form.preferred_location || 'Any'}</span></div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Recommendations */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Top Matches</h2>
              <div className="space-y-4">
                {result.recommendations?.length > 0 ? (
                  result.recommendations.map((r, idx)=> (
                    <ResultCard key={idx} career={r.career} confidence={r.confidence} onLearn={onLearn} rank={idx + 1} />
                  ))
                ) : (
                  <div className="glass p-6 rounded-md text-center">
                    <p className="text-gray-400">No recommendations found. Please try again.</p>
                    <Link to="/recommend" className="inline-block mt-4 px-4 py-2 bg-indigo-600 rounded">Go Back</Link>
                  </div>
                )}
              </div>
            </div>

            {/* Chart & Stats */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Match Analysis</h3>
              {result.recommendations?.length > 0 && (
                <>
                  <Charts data={result.recommendations || []} />
                  <div className="glass p-4 rounded-md mt-4">
                    <h4 className="font-semibold mb-3">Quick Stats</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Best Match:</span>
                        <span className="font-medium text-indigo-400">{result.recommendations[0]?.career}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Confidence:</span>
                        <span className="font-medium text-green-400">{(result.recommendations[0]?.confidence * 100).toFixed(0)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Analyzed:</span>
                        <span className="font-medium">36 careers</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/recommend" className="block w-full mt-4 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded text-center transition">
                    ← Retake Assessment
                  </Link>
                </>
              )}
            </div>
          </div>

        </div>

        {/* Modal */}
        {modal && modalData && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-indigo-400">{modal}</h3>
                <button onClick={()=>setModal(null)} className="text-gray-400 hover:text-white text-2xl">×</button>
              </div>
              
              <p className="text-gray-300 mb-6">{modalData.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="glass p-4 rounded">
                  <h4 className="font-semibold mb-2 text-indigo-300">💰 Salary Range</h4>
                  <p className="text-gray-300">{modalData.salary}</p>
                </div>
                
                <div className="glass p-4 rounded">
                  <h4 className="font-semibold mb-2 text-green-300">📈 Job Growth</h4>
                  <p className="text-gray-300">{modalData.growth}</p>
                </div>
                
                <div className="glass p-4 rounded">
                  <h4 className="font-semibold mb-2 text-yellow-300">🎓 Education</h4>
                  <p className="text-gray-300">{modalData.education}</p>
                </div>
                
                <div className="glass p-4 rounded">
                  <h4 className="font-semibold mb-2 text-purple-300">⚖️ Work-Life Balance</h4>
                  <p className="text-gray-300">{modalData.workLife}</p>
                </div>
              </div>
              
              <div className="glass p-4 rounded">
                <h4 className="font-semibold mb-3 text-cyan-300">🛠️ Key Skills Required</h4>
                <div className="flex flex-wrap gap-2">
                  {modalData.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-600/30 border border-indigo-500/50 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button onClick={()=>setModal(null)} className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition">
                  Close
                </button>
                <a href={`https://www.google.com/search?q=${encodeURIComponent(modal + ' career path')}`} 
                   target="_blank" rel="noopener noreferrer"
                   className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-center transition">
                  Learn More Online
                </a>
              </div>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  )
}
