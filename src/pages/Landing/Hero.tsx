import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Hero1, Hero2, Hero3 } from '../../assets/images';

const Hero = () => {
  const heroImages = [Hero1, Hero2, Hero3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance slides every 5 seconds - resets when image changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, heroImages.length]); // Added currentImageIndex dependency to reset timer

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      ))}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20" />

      {/* Navigation Controls */}
      <div className='absolute bottom-16 right-16 flex gap-4 z-20'>
        <button 
          onClick={goToPrevious}
          className='p-4 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full hover:bg-opacity-30 transition-all duration-300 hover:scale-110'
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={goToNext}
          className='p-4 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full hover:bg-opacity-30 transition-all duration-300 hover:scale-110'
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20 z-20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentImageIndex + 1) / heroImages.length) * 100}%` 
          }}
        />
      </div>
    </div>
  )
}

export default Hero