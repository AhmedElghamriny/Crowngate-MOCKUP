import React, { useState } from 'react'
import { Grip, X, Instagram, Github, Linkedin  } from 'lucide-react';
import { TransparentLogo } from '../assets/images';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const navigationItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about-us' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const nav = useNavigate();

  return (
    <>
      {/* Overlay when expanded - dark on mobile, blur on desktop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:bg-opacity-0 md:backdrop-blur-sm z-40"
          onClick={toggleNavbar}
        />
      )}

      {/* Navbar */}
      <div 
        className={`fixed top-0 left-0 bg-mineShaft min-h-screen font-serif text-gray-100 py-4 md:py-6 px-2 md:px-3 z-50 transition-all duration-500 ease-in-out ${
          isExpanded 
            ? 'w-full md:w-1/2' // Full width on mobile, half width on desktop
            : 'w-16 md:w-20' // Thinner collapsed width: w-16 on mobile, w-20 on desktop
        }`}
      >
        {/* Header with toggle button */}
        <div className="flex items-center justify-between">
          <button 
            onClick={toggleNavbar}
            className="p-1.5 md:p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300 mb-auto"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
          >
            {isExpanded ? (
              <X className='w-6 h-6 md:w-8 md:h-8' />
            ) : (
              <Grip className='w-6 h-6 md:w-8 md:h-8' />
            )}
          </button>
          {/* Logo/Brand - only show when expanded */}
          {isExpanded && (
            <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <img src={TransparentLogo} className='w-24 h-24 md:w-48 md:h-48 object-contain'/>
            </div>
          )}
        </div>

        {/* Navigation Content - only show when expanded */}
        {isExpanded && (
          <div className="space-y-2 md:space-y-5">
            {/* Navigation Menu */}
            <nav className="space-y-3 md:space-y-1">
              {navigationItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => {
                    nav(item.href)
                    toggleNavbar()
                  }}
                  className="flex w-fit px-2.5 md:px-3 transition-all duration-300 opacity-0 animate-fadeIn"
                  style={{ 
                    animationDelay: `${400 + index * 100}ms`, 
                    animationFillMode: 'forwards' 
                  }}
                >
                  <span 
                    className="text-6xl md:text-10xl text-sweep leading-tight" 
                    data-text={item.label}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>

            {/* Additional Content */}
            <div className="mt-8 md:mt-12 pt-3 md:pt-4 border-t border-gray-600 opacity-0 animate-fadeIn" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mb-3 md:mb-4">
                Connect
              </h3>
              <div className="space-y-2 md:space-y-3">
                <a 
                  href="mailto:contact@example.com" 
                  className="block text-gray-300 hover:text-whiteRock transition-colors duration-300 text-sm md:text-base"
                >
                  contact@example.com
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="block text-gray-300 hover:text-whiteRock transition-colors duration-300 text-sm md:text-base"
                >
                  +123 456 7890
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 md:mt-8 opacity-0 animate-fadeIn" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mb-3 md:mb-4">
                Follow
              </h3>
              <div className="flex space-x-3 md:space-x-4">
                <a href="https://www.instagram.com/ahmed.elghamriny" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                  <Instagram size={24} className="text-whiteRock" />
                </a>
                <a href="https://github.com/AhmedElghamriny" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                  <Github size={24} className="text-whiteRock" />
                </a>
                <a href="https://www.linkedin.com/in/ahmedelghamriny/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                  <Linkedin size={24} className="text-whiteRock" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar