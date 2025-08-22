import React, { useState, useEffect, useRef, useCallback } from 'react'
import Lenis from '@studio-freight/lenis'
import About from './About'
import Contact from './Contact'
import FeaturedProjects from './FeaturedProjects'
import Hero from './Hero'

const LandingMain = () => {
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