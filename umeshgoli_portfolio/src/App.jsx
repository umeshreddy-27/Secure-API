import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-violet-600 text-white">
      <div className="max-w-4xl mx-auto p-8">
        <div className="hero-shimmer rounded-md p-1">
          <Hero />
        </div>
        <About />
        <Projects />
        <Contact />
        <footer className="text-center text-sm opacity-90 mt-8">© 2025 Umesh Reddy Goli · <a href="mailto:ugoli2710@gmail.com" className="underline">ugoli2710@gmail.com</a></footer>
      </div>
    </div>
  )
}
