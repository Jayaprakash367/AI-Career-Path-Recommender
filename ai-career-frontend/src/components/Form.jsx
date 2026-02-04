import React, {useState} from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Form(){
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    // Step 1: Basic Info
    name:'', age:'', education:'', current_role:'',
    years_experience: 0,
    preferred_industry: '',
    preferred_location: '',
    certifications: '',
    linkedin: '',
    // Step 2: Interests (multiple)
    interest_tech:0, interest_design:0, interest_business:0, interest_arts:0, interest_science:0,
    // Step 3: Skills (1-5 scale)
    communication:3, creativity:3, logic:3, problem_solving:3, teamwork:3, leadership:3,
    // Step 4: Technical & Domain
    programming:0, data_analysis:0, writing:0, public_speaking:0,
    // Step 5: Goals & Performance
    marks:70, personality:'analytical', work_preference:'team', career_goal:'growth'
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const TOTAL_STEPS = 6
  function next(){ setStep(s => Math.min(TOTAL_STEPS, s+1)) }
  function prev(){ setStep(s => Math.max(1, s-1)) }

  async function submit(){
    setLoading(true)
    try{
      // register full user details for tracking
      await axios.post((import.meta.env.VITE_API_URL||'http://localhost:5000') + '/register', form)
    }catch(e){/*ignore*/}
    try{
      const res = await axios.post((import.meta.env.VITE_API_URL||'http://localhost:5000') + '/predict', form)
      setLoading(false)
      // pass results and form data via location state
      navigate('/results', {state: {result: res.data, form}})
    }catch(err){
      setLoading(false)
      alert('Prediction failed: ' + (err?.response?.data?.error || err.message))
    }
  }

  return (
    <div className="p-8 md:p-12">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex justify-between mb-3 text-sm">
          <span className="text-orange-600 font-semibold">Step {step} of {TOTAL_STEPS}</span>
          <span className="text-gray-600">{Math.round((step/TOTAL_STEPS)*100)}% Complete</span>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            initial={{width:0}} 
            animate={{width: `${(step/TOTAL_STEPS)*100}%`}} 
            transition={{duration:0.5, ease: "easeOut"}} 
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" 
          />
        </div>
      </div>

      {/* Step 1: Basic Information */}
      {step===1 && (
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.3}} className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">📋 Let's Start with Basics</h3>
            <p className="text-gray-700">Help us understand who you are</p>
          </div>
          
          <div>
            <label className="block mb-2.5 text-sm font-semibold text-gray-900">Full Name *</label>
            <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} 
              className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-300 focus:border-orange-500 focus:bg-orange-50 outline-none transition-colors" 
              placeholder="John Doe" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2.5 text-sm font-semibold text-gray-900">Age *</label>
              <input type="number" value={form.age} onChange={e=>setForm({...form, age:e.target.value})} 
                className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-300 focus:border-orange-500 focus:bg-orange-50 outline-none transition-colors" 
                placeholder="25" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Education Level *</label>
              <select value={form.education} onChange={e=>setForm({...form, education:e.target.value})} 
                className="w-full p-3 rounded bg-white border-2 border-gray-300 focus:border-orange-500 text-gray-900 outline-none">
                <option value="">Select...</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's Degree</option>
                <option value="Master's">Master's Degree</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Current Role/Status</label>
            <input value={form.current_role} onChange={e=>setForm({...form, current_role:e.target.value})} 
              className="w-full p-3 rounded bg-white border-2 border-gray-300 focus:border-orange-500 text-gray-900 outline-none" 
              placeholder="e.g., Student, Software Engineer, Career Changer" />
          </div>
        </motion.div>
      )}

      {/* Step 2: Interests */}
      {step===2 && (
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">💡 What Interests You?</h3>
          <p className="text-sm text-gray-700 mb-4">Select all areas that genuinely interest you</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <label className="flex items-center p-3 bg-gray-100 rounded cursor-pointer hover:bg-orange-50 text-gray-900">
              <input type="checkbox" checked={form.interest_tech} 
                onChange={e=>setForm({...form, interest_tech: e.target.checked?1:0})} 
                className="mr-3" />
              <span>💻 Technology & Programming</span>
            </label>
            
            <label className="flex items-center p-3 bg-gray-100 rounded cursor-pointer hover:bg-orange-50 text-gray-900">
              <input type="checkbox" checked={form.interest_design} 
                onChange={e=>setForm({...form, interest_design: e.target.checked?1:0})} 
                className="mr-3" />
              <span>🎨 Design & Arts</span>
            </label>
            
            <label className="flex items-center p-3 bg-gray-100 rounded cursor-pointer hover:bg-orange-50 text-gray-900">
              <input type="checkbox" checked={form.interest_business} 
                onChange={e=>setForm({...form, interest_business: e.target.checked?1:0})} 
                className="mr-3" />
              <span>📊 Business & Management</span>
            </label>
            
            <label className="flex items-center p-3 bg-gray-100 rounded cursor-pointer hover:bg-orange-50 text-gray-900">
              <input type="checkbox" checked={form.interest_science} 
                onChange={e=>setForm({...form, interest_science: e.target.checked?1:0})} 
                className="mr-3" />
              <span>🔬 Science & Research</span>
            </label>
            
            <label className="flex items-center p-3 bg-gray-100 rounded cursor-pointer hover:bg-orange-50 text-gray-900">
              <input type="checkbox" checked={form.interest_arts} 
                onChange={e=>setForm({...form, interest_arts: e.target.checked?1:0})} 
                className="mr-3" />
              <span>🎭 Creative Arts</span>
            </label>
          </div>
        </motion.div>
      )}

      {/* Step 3: Core Skills */}
      {step===3 && (
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">🎯 Rate Your Core Skills</h3>
          <p className="text-sm text-gray-700 mb-4">Rate yourself from 1 (Beginner) to 5 (Expert)</p>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Communication</label>
                <span className="text-orange-600 font-semibold">{form.communication}/5</span>
              </div>
              <input type="range" min="1" max="5" value={form.communication} 
                onChange={e=>setForm({...form, communication: e.target.value})} 
                className="w-full accent-orange-500" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Creativity & Innovation</label>
                <span className="text-orange-600 font-semibold">{form.creativity}/5</span>
              </div>
              <input type="range" min="1" max="5" value={form.creativity} 
                onChange={e=>setForm({...form, creativity: e.target.value})} 
                className="w-full accent-orange-500" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Logical & Analytical Thinking</label>
                <span className="text-orange-600 font-semibold">{form.logic}/5</span>
              </div>
              <input type="range" min="1" max="5" value={form.logic} 
                onChange={e=>setForm({...form, logic: e.target.value})} 
                className="w-full accent-orange-500" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Problem Solving</label>
                <span className="text-orange-600 font-semibold">{form.problem_solving}/5</span>
              </div>
              <input type="range" min="1" max="5" value={form.problem_solving} 
                onChange={e=>setForm({...form, problem_solving: e.target.value})} 
                className="w-full accent-orange-500" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Teamwork & Collaboration</label>
                <span className="text-orange-600 font-semibold">{form.teamwork}/5</span>
              </div>
              <input type="range" min="1" max="5" value={form.teamwork} 
                onChange={e=>setForm({...form, teamwork: e.target.value})} 
                className="w-full accent-orange-500" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Leadership</label>
                <span className="text-orange-600 font-semibold">{form.leadership}/5</span>
              </div>
              <input type="range" min="1" max="5" value={form.leadership} 
                onChange={e=>setForm({...form, leadership: e.target.value})} 
                className="w-full accent-orange-500" />
            </div>
          </div>
        </motion.div>
      )}

      {/* Step 4: Technical Skills */}
      {step===4 && (
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">⚙️ Technical & Domain Skills</h3>
          <p className="text-sm text-gray-700 mb-4">Rate your experience level (1-5)</p>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Programming & Coding</label>
                <span className="text-orange-600 font-semibold">{form.programming}/5</span>
              </div>
              <input type="range" min="0" max="5" value={form.programming} 
                onChange={e=>setForm({...form, programming: e.target.value})} 
                className="w-full accent-orange-500" />
              <p className="text-xs text-gray-600 mt-1">0 = No experience, 5 = Expert</p>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Data Analysis & Statistics</label>
                <span className="text-orange-600 font-semibold">{form.data_analysis}/5</span>
              </div>
              <input type="range" min="0" max="5" value={form.data_analysis} 
                onChange={e=>setForm({...form, data_analysis: e.target.value})} 
                className="w-full accent-orange-500" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Writing & Content Creation</label>
                <span className="text-orange-600 font-semibold">{form.writing}/5</span>
              </div>
              <input type="range" min="0" max="5" value={form.writing} 
                onChange={e=>setForm({...form, writing: e.target.value})} 
                className="w-full accent-orange-500" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Public Speaking & Presentation</label>
                <span className="text-orange-600 font-semibold">{form.public_speaking}/5</span>
              </div>
              <input type="range" min="0" max="5" value={form.public_speaking} 
                onChange={e=>setForm({...form, public_speaking: e.target.value})} 
                className="w-full accent-orange-500" />
            </div>
          </div>
        </motion.div>
      )}

      {/* Step 5: Goals & Preferences */}
      {step===5 && (
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">🎓 Academic & Career Preferences</h3>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Academic Performance (0-100)</label>
            <input type="number" min="0" max="100" value={form.marks} 
              onChange={e=>setForm({...form, marks: e.target.value})} 
              className="w-full p-3 rounded bg-white border-2 border-gray-300 focus:border-orange-500 text-gray-900 outline-none" 
              placeholder="85" />
            <p className="text-xs text-gray-700 mt-1">Your average grade percentage</p>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Personality Type</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <label className={`p-3 bg-gray-100 rounded cursor-pointer border-2 text-gray-900 ${form.personality==='analytical'?'border-orange-500 bg-orange-50':'border-gray-300'}`}>
                <input type="radio" name="personality" checked={form.personality==='analytical'} 
                  onChange={()=>setForm({...form, personality:'analytical'})} 
                  className="mr-2" />
                <span className="font-medium">🧠 Analytical</span>
                <p className="text-xs text-gray-700 mt-1">Data-driven, logical thinker</p>
              </label>
              
              <label className={`p-3 bg-gray-100 rounded cursor-pointer border-2 text-gray-900 ${form.personality==='creative'?'border-orange-500 bg-orange-50':'border-gray-300'}`}>
                <input type="radio" name="personality" checked={form.personality==='creative'} 
                  onChange={()=>setForm({...form, personality:'creative'})} 
                  className="mr-2" />
                <span className="font-medium">🎨 Creative</span>
                <p className="text-xs text-gray-700 mt-1">Imaginative, artistic</p>
              </label>
              
              <label className={`p-3 bg-gray-100 rounded cursor-pointer border-2 text-gray-900 ${form.personality==='social'?'border-orange-500 bg-orange-50':'border-gray-300'}`}>
                <input type="radio" name="personality" checked={form.personality==='social'} 
                  onChange={()=>setForm({...form, personality:'social'})} 
                  className="mr-2" />
                <span className="font-medium">👥 Social</span>
                <p className="text-xs text-gray-700 mt-1">People-oriented, communicative</p>
              </label>
            </div>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Work Preference</label>
            <select value={form.work_preference} onChange={e=>setForm({...form, work_preference:e.target.value})} 
              className="w-full p-3 rounded bg-white border-2 border-gray-300 focus:border-orange-500 text-gray-900 outline-none">
              <option value="team">Team Collaboration</option>
              <option value="independent">Independent Work</option>
              <option value="mixed">Mix of Both</option>
            </select>
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Primary Career Goal</label>
            <select value={form.career_goal} onChange={e=>setForm({...form, career_goal:e.target.value})} 
              className="w-full p-3 rounded bg-white border-2 border-gray-300 focus:border-orange-500 text-gray-900 outline-none">
              <option value="growth">Career Growth & Advancement</option>
              <option value="stability">Job Stability & Security</option>
              <option value="creativity">Creative Expression</option>
              <option value="impact">Social Impact</option>
              <option value="income">High Income Potential</option>
              <option value="balance">Work-Life Balance</option>
            </select>
          </div>
        </motion.div>
      )}

      {/* Step 6: Extra Details */}
      {step===6 && (
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">📝 Extra Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Years of Experience</label>
              <input type="number" min="0" value={form.years_experience} onChange={e=>setForm({...form, years_experience: Number(e.target.value)})}
                className="w-full p-3 rounded bg-white border-2 border-gray-300 focus:border-orange-500 text-gray-900 outline-none" />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Preferred Industry</label>
              <select value={form.preferred_industry} onChange={e=>setForm({...form, preferred_industry:e.target.value})}
                className="w-full p-3 rounded bg-white border-2 border-gray-300 focus:border-orange-500 text-gray-900 outline-none">
                <option value="">Select industry...</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="creative">Creative/Design</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Preferred Location</label>
            <input value={form.preferred_location} onChange={e=>setForm({...form, preferred_location:e.target.value})}
              className="w-full p-3 rounded bg-white border-2 border-gray-300 focus:border-orange-500 text-gray-900 outline-none" placeholder="e.g., Remote, City, Country" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Certifications (comma separated)</label>
            <input value={form.certifications} onChange={e=>setForm({...form, certifications:e.target.value})}
              className="w-full p-3 rounded bg-white border-2 border-gray-300 focus:border-orange-500 text-gray-900 outline-none" placeholder="e.g., AWS, PMP, Google UX" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">LinkedIn / Portfolio URL (optional)</label>
            <input value={form.linkedin} onChange={e=>setForm({...form, linkedin:e.target.value})}
              className="w-full p-3 rounded bg-white border-2 border-gray-300 focus:border-orange-500 text-gray-900 outline-none" placeholder="https://" />
          </div>
        </motion.div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-12 gap-4">
        <motion.button 
          onClick={prev} 
          disabled={step===1}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 rounded-lg bg-gray-300 hover:bg-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-gray-400 font-semibold text-gray-900"
        >
          ← Back
        </motion.button>
        {step < TOTAL_STEPS ? (
          <motion.button 
            onClick={next}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/50 text-white button-glow transition-all font-semibold"
          >
            Next →
          </motion.button>
        ) : (
          <motion.button 
            onClick={submit} 
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/50 text-white button-glow disabled:opacity-50 transition-all font-semibold flex items-center gap-2"
          >
            {loading? '⏳ Analyzing Your Profile...' : '✨ Get My Recommendations'}
          </motion.button>
        )}
      </div>
    </div>
  )
}
