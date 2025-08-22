import React from 'react'
import { Building2, Award, Globe, Users } from 'lucide-react'

const About = () => {
  return (
    <div className='min-h-full w-full bg-akaroa font-serifRegular'>
      {/* Hero Section */}
      <div className='bg-mineShaft text-whiteRock py-8 md:py-16 px-4 md:px-8'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center'>
          {/* Left Content */}
          <div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight'>
              CRAFTING EXCELLENCE
              <br />
              <span className='text-barleyCorn'>IN URBAN DEVELOPMENT</span>
            </h1>
            <p className='text-base md:text-lg mb-6 md:mb-8 text-gray-300 leading-relaxed'>
              Crowngate Properties, a pioneering force in the development industry, 
              has been reshaping city skylines since 2010, offering a portfolio of 
              premium residential, commercial, and mixed-use properties across the 
              region and beyond.
            </p>
            <button className='border border-whiteRock text-whiteRock px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-whiteRock hover:text-mineShaft transition-all duration-300 font-medium text-sm md:text-base'>
              DISCOVER MORE
            </button>
          </div>
          
          {/* Right Stats */}
          <div className='grid grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-0'>
            <div className='text-center'>
              <div className='text-2xl md:text-4xl font-bold text-barleyCorn mb-1 md:mb-2'>AED 2.8B*</div>
              <div className='text-xs md:text-sm text-gray-400 uppercase tracking-wider'>Total Portfolio Value</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl md:text-4xl font-bold text-barleyCorn mb-1 md:mb-2'>12-15%**</div>
              <div className='text-xs md:text-sm text-gray-400 uppercase tracking-wider'>Annual Returns</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl md:text-4xl font-bold text-barleyCorn mb-1 md:mb-2'>0.35%*</div>
              <div className='text-xs md:text-sm text-gray-400 uppercase tracking-wider'>Management Fees</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl md:text-4xl font-bold text-barleyCorn mb-1 md:mb-2'>UP TO 120%**</div>
              <div className='text-xs md:text-sm text-gray-400 uppercase tracking-wider'>Capital Growth</div>
            </div>
          </div>
        </div>
        
        <div className='max-w-7xl mx-auto mt-6 md:mt-8'>
          <p className='text-xs text-gray-500 text-center px-4'>
            *Terms and conditions apply. **Historical performance is not indicative of future results.
          </p>
        </div>
      </div>

      {/* Why Crowngate Section */}
      <div className='py-4 md:py-16 px-4 md:px-8'>
        <div className='mx-auto'>
          <h2 className='text-xl sm:text-3xl md:text-4xl font-bold text-center text-mineShaft mb-2 md:mb-6'>
            WHY CROWNGATE PROPERTIES?
          </h2>
          
          <p className='text-center text-mineShaft max-w-2xl mx-auto mb-10 md:mb-16 text-base md:text-lg leading-relaxed'>
            Renowned for iconic developments and innovative design solutions, Crowngate combines architectural 
            innovation and world-class amenities. With a presence in major cities across the UAE, Saudi Arabia, Qatar, and beyond, 
            its portfolio of luxury residential, commercial, and leisure properties sets a global standard for excellence.
          </p>

          {/* Stats Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-16'>
            {/* Projects Delivered */}
            <div className='bg-whiteRock p-6 md:p-8 rounded-lg text-center shadow-sm'>
              <div className='w-12 h-12 md:w-16 md:h-16 bg-mineShaft rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4'>
                <Building2 className='w-6 h-6 md:w-8 md:h-8 text-whiteRock' />
              </div>
              <div className='text-2xl md:text-3xl font-bold text-mineShaft mb-1 md:mb-2'>75,000+</div>
              <div className='text-xs md:text-sm text-mineShaft uppercase tracking-wider font-medium'>Units Delivered</div>
            </div>

            {/* Ongoing Projects */}
            <div className='bg-whiteRock p-6 md:p-8 rounded-lg text-center shadow-sm'>
              <div className='w-12 h-12 md:w-16 md:h-16 bg-mineShaft rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4'>
                <Users className='w-6 h-6 md:w-8 md:h-8 text-whiteRock' />
              </div>
              <div className='text-2xl md:text-3xl font-bold text-mineShaft mb-1 md:mb-2'>85,000+</div>
              <div className='text-xs md:text-sm text-mineShaft uppercase tracking-wider font-medium'>Satisfied Customers</div>
            </div>

            {/* Awards */}
            <div className='bg-whiteRock p-6 md:p-8 rounded-lg text-center shadow-sm'>
              <div className='w-12 h-12 md:w-16 md:h-16 bg-mineShaft rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4'>
                <Award className='w-6 h-6 md:w-8 md:h-8 text-whiteRock' />
              </div>
              <div className='text-2xl md:text-3xl font-bold text-mineShaft mb-1 md:mb-2'>150+</div>
              <div className='text-xs md:text-sm text-mineShaft uppercase tracking-wider font-medium'>Awards Received</div>
            </div>

            {/* Countries */}
            <div className='bg-whiteRock p-6 md:p-8 rounded-lg text-center shadow-sm'>
              <div className='w-12 h-12 md:w-16 md:h-16 bg-mineShaft rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4'>
                <Globe className='w-6 h-6 md:w-8 md:h-8 text-whiteRock' />
              </div>
              <div className='text-2xl md:text-3xl font-bold text-mineShaft mb-1 md:mb-2'>8</div>
              <div className='text-xs md:text-sm text-mineShaft uppercase tracking-wider font-medium'>Countries</div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center'>
            <div>
              <h3 className='text-lg md:text-xl font-bold text-mineShaft mb-3 md:mb-4'>Premium Locations</h3>
              <p className='text-mineShaft leading-relaxed text-sm md:text-base'>
                Strategic developments in prime locations across Dubai, Abu Dhabi, 
                Riyadh, and other major metropolitan areas.
              </p>
            </div>
            
            <div>
              <h3 className='text-lg md:text-xl font-bold text-mineShaft mb-3 md:mb-4'>Innovative Design</h3>
              <p className='text-mineShaft leading-relaxed text-sm md:text-base'>
                Award-winning architecture and cutting-edge technology integrated 
                into every project for modern living experiences.
              </p>
            </div>
            
            <div>
              <h3 className='text-lg md:text-xl font-bold text-mineShaft mb-3 md:mb-4'>Proven Track Record</h3>
              <p className='text-mineShaft leading-relaxed text-sm md:text-base'>
                Over a decade of successful project delivery with consistent 
                quality and on-time completion rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About