import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const navigate = useNavigate() // Initialize the navigate function
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiry: 'general'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  // Function to navigate to communities page
  const handleViewAllCommunities = () => {
    navigate('/communities')
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
    <div className='min-h-screen w-full flex items-center justify-center font-serifRegular bg-mineShaft text-whiteRock py-4 lg:py-0'>
      <div className='max-w-[2400px] w-full mx-auto px-0 sm:px-8 lg:px-16'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16 lg:items-start'>
          
          {/* Left Side - Contact Form */}
          <div className='w-full lg:w-[55%] p-4 sm:p-8 lg:p-16 sm:rounded-lg lg:shadow-2xl bg-barleyCorn'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-whiteRock mb-3'>Get In Touch</h2>
            <p className='text-whiteRock mb-6 lg:mb-10 opacity-75 text-base lg:text-lg'>
              Ready to find your dream property? Contact our team of experts today.
            </p>
            {/* Contact Form */}
            <div className='space-y-4 lg:space-y-8'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8'>
                <div>
                  <label className='block text-whiteRock font-medium mb-2 lg:mb-3 text-base lg:text-lg'>Full Name</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='w-full px-4 lg:px-6 py-3 lg:py-4 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-800 transition-colors text-base lg:text-lg text-gray-800 placeholder-gray-500 bg-[whiteRock] border-[akaroa]'
                    placeholder='Enter your full name'
                    required
                  />
                </div>
                <div>
                  <label className='block text-whiteRock font-medium mb-2 lg:mb-3 text-base lg:text-lg'>Email Address</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full px-4 lg:px-6 py-3 lg:py-4 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-800 transition-colors text-base lg:text-lg text-gray-800 placeholder-gray-500 bg-[whiteRock] border-[akaroa]'
                    placeholder='Enter your email'
                    required
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8'>
                <div>
                  <label className='block text-whiteRock font-medium mb-2 lg:mb-3 text-base lg:text-lg'>Phone Number</label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full px-4 lg:px-6 py-3 lg:py-4 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-800 transition-colors text-base lg:text-lg text-gray-800 placeholder-gray-500 bg-[whiteRock] border-[akaroa]'
                    placeholder='+971 50 123 4567'
                  />
                </div>
                <div>
                  <label className='block text-whiteRock font-medium mb-2 lg:mb-3 text-base lg:text-lg'>Inquiry Type</label>
                  <select
                    name='inquiry'
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    className='w-full px-4 lg:px-6 py-3 lg:py-4 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-800 transition-colors text-base lg:text-lg text-gray-800 bg-[whiteRock] border-[akaroa]'
                  >
                    <option value='general'>General Inquiry</option>
                    <option value='buying'>Property Purchase</option>
                    <option value='selling'>Property Sale</option>
                    <option value='investment'>Investment Opportunities</option>
                  </select>
                </div>
              </div>
              <div>
                <label className='block text-whiteRock font-medium mb-2 lg:mb-3 text-base lg:text-lg'>Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className='w-full px-4 lg:px-6 py-3 lg:py-4 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-800 transition-colors resize-none text-base lg:text-lg text-gray-800 placeholder-gray-500 bg-[whiteRock] border-[akaroa]'
                  placeholder='Tell us about your requirements...'
                  required
                />
              </div>
              <button
                onClick={handleSubmit}
                className='w-full text-whiteRock py-4 lg:py-5 rounded-lg hover:bg-akaroa hover:text-white transition-colors duration-300 flex items-center justify-center gap-3 font-medium text-base lg:text-lg bg-mineShaft'
              >
                <Send className='w-5 h-5 lg:w-6 lg:h-6' />
                Send Message
              </button>
            </div>
          </div>
          
          {/* Right Side - Explore Communities */}
          <div className='w-full lg:w-[40%] text-whiteRock px-4 sm:px-0'>
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
                className='text-whiteRock px-6 lg:px-10 py-3 lg:py-4 rounded-lg hover:bg-whiteRock hover:text-mineShaft transition-colors duration-300 font-medium text-base lg:text-lg bg-[akaroa]'
              >
                View All Communities
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact