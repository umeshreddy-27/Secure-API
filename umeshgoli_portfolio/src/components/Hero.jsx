import React from 'react'
import { motion } from 'framer-motion'
import Photo from '../assets/photo.jpg'

export default function Hero() {
  return (
    <motion.header initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex items-center gap-4 bg-white/10 rounded-md p-6 mb-6 backdrop-blur-sm">
      <div className="flex-shrink-0">
        <img src={Photo} alt="Umesh" className="w-20 h-20 rounded-full ring-2 ring-white/60 object-cover shadow-sm" />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold">Umesh Reddy Goli</h1>
        <p className="mt-1">Senior Frontend Developer — React · Angular · TypeScript</p>
        <div className="mt-3 flex items-center gap-4 text-sm">
          <a href="https://umeshgoli.vercel.app" target="_blank" rel="noreferrer" className="underline">umeshgoli.vercel.app</a>
          <a href="/Umesh_Portfolio_Final.pdf" className="underline" download>Download Resume</a>
          <a href="https://github.com/umeshreddy-27/Secure-API" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.65.23 2.87.11 3.17.75.81 1.2 1.84 1.2 3.1 0 4.41-2.7 5.39-5.27 5.67.42.36.8 1.08.8 2.18 0 1.57-.01 2.85-.01 3.24 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
            <span className="ml-1">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/umesh-reddy-goli-340a2a123" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.84v2.18h.05c.54-1.02 1.86-2.09 3.83-2.09 4.1 0 4.86 2.7 4.86 6.2V24h-4v-7.33c0-1.75-.03-4-2.44-4-2.44 0-2.82 1.9-2.82 3.87V24h-4z"/></svg>
            <span className="ml-1">LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.header>
  )
}
