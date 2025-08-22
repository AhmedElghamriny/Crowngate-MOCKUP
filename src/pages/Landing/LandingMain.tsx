import React, { useState, useEffect, useRef, useCallback } from 'react'
import Lenis from '@studio-freight/lenis'
import About from './About'
import Contact from './Contact'
import FeaturedProjects from './FeaturedProjects'
import Hero from './Hero'

const LandingMain = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const sections = ['hero', 'about', 'projects', 'contact']
  const lenisRef = useRef<Lenis | null>(null)

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const isSmallScreen = window.innerWidth < 768
    
    if (isTouchDevice || isSmallScreen) {
      return
    }

    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 0,
      infinite: false,
      autoResize: true,
    })

    const raf = (time: number) => {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  // Improved section tracking based on actual section positions
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2 // Check middle of viewport

      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height

          // Check if the middle of the viewport is within this section
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            if (currentSection !== index) {
              setCurrentSection(index)
            }
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentSection, sections])

  return (
  <div className="ml-16 md:ml-20">
    <Hero />
    <About />
    <FeaturedProjects />
    <Contact />
  </div>
)
}

export default LandingMain