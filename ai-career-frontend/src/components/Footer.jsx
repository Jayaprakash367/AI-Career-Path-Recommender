import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Roadmap', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Support', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: 'github', href: '#' },
    { icon: 'linkedin', href: '#' },
    { icon: 'twitter', href: '#' },
    { icon: 'facebook', href: '#' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-300">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-gray-300">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center gap-3">
              <img src="/favicon.svg" alt="CareerAI" className="w-10 h-10" />
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  CareerAI
                </h3>
                <p className="text-xs text-gray-500">Platform</p>
              </div>
            </Link>
            <p className="text-gray-700 text-sm leading-relaxed max-w-sm">
              Empowering professionals with AI-driven career intelligence. Discover opportunities, unlock potential, and build the future of work.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-gray-200 hover:bg-orange-400 rounded-lg flex items-center justify-center text-gray-700 hover:text-white transition-colors"
                  title={link.icon}
                >
                  {link.icon === 'github' && <span>GH</span>}
                  {link.icon === 'linkedin' && <span>In</span>}
                  {link.icon === 'twitter' && <span>𝕏</span>}
                  {link.icon === 'facebook' && <span>f</span>}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30 p-8 rounded-xl"
          >
            <h3 className="text-lg font-bold mb-2 text-gray-900">Stay Updated</h3>
            <p className="text-gray-700 text-sm mb-4">Get the latest career tips and AI insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-100 border-2 border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-orange-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700"
        >
          <p>© {currentYear} CareerAI Platform. All rights reserved.</p>
          <p>Made with ❤️ for career seekers and professionals worldwide</p>
          <p>Version 2.0 | Last Updated: Feb 2026</p>
        </motion.div>
      </div>
    </footer>
  )
}
