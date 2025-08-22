import React, { useState } from 'react'
import { Eye } from 'lucide-react'
import { FP1, FP2, FP3 } from '../../assets/images'

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

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

  return (
    <div className='min-h-screen w-full flex'>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className='relative h-screen w-1/3 overflow-hidden cursor-pointer group'
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
  )
}

export default FeaturedProjects