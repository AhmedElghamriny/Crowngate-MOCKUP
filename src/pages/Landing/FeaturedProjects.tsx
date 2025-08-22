import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const navigate = useNavigate()

  const projects = [
    {
      id: 1,
      image: "https://abu-dhabi.realestate/wp-content/uploads/2021/01/marina-heights-1.jpg",
      location: "Dubai Marina",
      type: "Luxury Residences"
    },
    {
      id: 2,
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/046bda218627789.67a4720db516b.jpg",
      location: "Business Bay",
      type: "Commercial Complex"
    },
    {
      id: 3,
      image: "https://www.cbnme.com/wp-content/uploads/2024/11/Palm-Jebel-Ali-villas-2.jpg",
      location: "Palm Jumeirah",
      type: "Waterfront Villas"
    }
  ]

  // Function to navigate to communities page
  const handleViewAllCommunities = () => {
    navigate('/projects')
  }

  const communities = [
    {
      id: 1,
      name: "Marina Heights",
      location: "Dubai Marina",
      image: "https://abu-dhabi.realestate/wp-content/uploads/2021/01/marina-heights-1.jpg"
    },
    {
      id: 2,
      name: "Bay Gardens",
      location: "Business Bay",
      image: "https://image-tc.galaxy.tf/wijpeg-1ny86vv0146722o0kbxqe7691/baygardensresort.jpg"
    },
    {
      id: 3,
      name: "Royal Palms",
      location: "Palm Jumeirah",
      image: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2016/07/13/1447/Royal-Palms-Resort-and-Spa-P046-Courtyard.jpg/Royal-Palms-Resort-and-Spa-P046-Courtyard.16x9.jpg"
    },
    {
      id: 4,
      name: "City Central",
      location: "Downtown Dubai",
      image: "https://renderatelier.com/wp-content/uploads/2021/10/Renderings-in-Saudi-Arabia-1.png"
    }
  ]

  return (
    <div>
      <div className='min-h-screen w-full flex flex-col md:flex-row'>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className='relative h-screen md:w-1/3 w-full overflow-hidden cursor-pointer group'
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out ${
                hoveredProject === project.id ? 'blur-sm scale-110' : 'blur-0 scale-100'
              }`}
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            />

            {/* Dark Overlay */}
            <div 
              className={`absolute inset-0 bg-black transition-opacity duration-700 ease-in-out ${
                hoveredProject === project.id ? 'bg-opacity-40' : 'bg-opacity-20'
              }`} 
            />

            {/* Hover Content */}
            <div 
              className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-700 ease-in-out ${
                hoveredProject === project.id 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* View More Text */}
              <h3 className='text-2xl font-light tracking-wider mb-2 text-center'>
                VIEW TO SEE MORE
              </h3>

              {/* Project Details */}
              <div className='text-center space-y-1 opacity-80'>
                <p className='text-lg font-medium'>{project.location}</p>
                <p className='text-sm uppercase tracking-widest'>{project.type}</p>
              </div>

              {/* Subtle Animation Line */}
              <div className='mt-8 w-16 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-300' />
            </div>

            {/* Bottom Gradient */}
            <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black from-opacity-50 to-transparent' />
          </div>
        ))}
      </div>

      <div className='w-full text-whiteRock px-4 sm:px-8 py-8 sm:pt-24 bg-mineShaft'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-3'>Explore Communities</h2>
            <p className='mb-6 lg:mb-10 opacity-75 text-base lg:text-lg'>
              Discover premium developments across Dubai's most sought-after locations.
            </p>
            
            {/* Communities Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8'>
              {communities.map((community) => (
                <div
                  key={community.id}
                  className='group relative overflow-hidden rounded-lg shadow-lg cursor-pointer'
                >
                  {/* Community Image */}
                  <div
                    className='w-full h-48 sm:h-60 lg:h-80 bg-cover bg-center transition-transform duration-500'
                    style={{
                      backgroundImage: `url(${community.image})`
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className='absolute inset-0 bg-black bg-opacity-10  transition-all duration-300' />
                  
                  {/* Content */}
                  <div className='absolute inset-0 flex flex-col justify-end p-4 lg:p-8 text-whiteRock'>
                    <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-1 lg:mb-2'>{community.name}</h3>
                    <p className='opacity-90 mb-3 lg:mb-6 text-sm lg:text-lg'>{community.location}</p>
                    
                    {/* View Button */}
                    <button className='bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-whiteRock px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium hover:bg-opacity-30 transition-all duration-300 self-start text-sm lg:text-lg'>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional CTA */}
            <div className='mt-6 lg:mt-10 text-center'>
              <button 
                onClick={handleViewAllCommunities} 
                className='text-whiteRock px-6 lg:px-10 py-3 lg:py-4 rounded-lg hover:bg-whiteRock hover:text-mineShaft transition-colors duration-300 font-medium text-base lg:text-lg bg-[akaroa] font-serifRegular'
              >
                View All Communities
              </button>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProjects