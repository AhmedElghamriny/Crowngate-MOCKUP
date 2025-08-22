import React, { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

interface LenisOptions {
  duration?: number
  easing?: (t: number) => number
  wheelMultiplier?: number
  touchMultiplier?: number
}

const useLenisScroll = (options: LenisOptions = {}) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const isSmallScreen = window.innerWidth < 768
    
    // Don't initialize Lenis on mobile devices
    if (isTouchDevice || isSmallScreen) {
      return
    }

    const defaultOptions: LenisOptions = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 0,
      ...options 
    }

    lenisRef.current = new Lenis(defaultOptions)

    const raf = (time: number) => {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return lenisRef
}

export default useLenisScroll