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

  return (
    <div className='w-full flex items-center justify-center font-serifRegular bg-akaroa md:py-12'>
      <div className='w-full md:w-[1000px] mx-auto'>
        <div className='flex flex-col'>
          
          {/* Contact Form */}
          <div className='w-full p-6 sm:p-8 lg:p-16 md:rounded-lg shadow-2xl bg-mineShaft'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-whiteRock mb-3'>Get In Touch</h2>
            <p className='text-whiteRock mb-6 lg:mb-10 opacity-75 text-base lg:text-lg'>
              Ready to find your dream property? Contact our team of experts today.
            </p>
            
            {/* Contact Form */}
            <div className='space-y-4 lg:space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
                <div>
                  <label className='block text-whiteRock font-medium mb-2 text-sm lg:text-base'>Full Name</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 lg:px-6 lg:py-4 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-800 transition-colors text-sm lg:text-base text-gray-800 placeholder-gray-500 bg-whiteRock'
                    placeholder='Enter your full name'
                    required
                  />
                </div>
                <div>
                  <label className='block text-whiteRock font-medium mb-2 text-sm lg:text-base'>Email Address</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 lg:px-6 lg:py-4 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-800 transition-colors text-sm lg:text-base text-gray-800 placeholder-gray-500 bg-whiteRock'
                    placeholder='Enter your email'
                    required
                  />
                </div>
              </div>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6'>
                <div>
                  <label className='block text-whiteRock font-medium mb-2 text-sm lg:text-base'>Phone Number</label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 lg:px-6 lg:py-4 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-800 transition-colors text-sm lg:text-base text-gray-800 placeholder-gray-500 bg-whiteRock'
                    placeholder='+971 50 123 4567'
                  />
                </div>
                <div>
                  <label className='block text-whiteRock font-medium mb-2 text-sm lg:text-base'>Inquiry Type</label>
                  <select
                    name='inquiry'
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 lg:px-6 lg:py-4 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-800 transition-colors text-sm lg:text-base text-gray-800 bg-whiteRock'
                  >
                    <option value='general'>General Inquiry</option>
                    <option value='buying'>Property Purchase</option>
                    <option value='selling'>Property Sale</option>
                    <option value='investment'>Investment Opportunities</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className='block text-whiteRock font-medium mb-2 text-sm lg:text-base'>Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className='w-full px-4 py-3 lg:px-6 lg:py-4 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-800 transition-colors resize-none text-sm lg:text-base text-gray-800 placeholder-gray-500 bg-whiteRock'
                  placeholder='Tell us about your requirements...'
                  required
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className='w-full text-whiteRock py-4 lg:py-5 rounded-lg hover:bg-akaroa hover:text-white transition-colors duration-300 flex items-center justify-center gap-3 font-medium text-base lg:text-lg bg-gray-700'
              >
                <Send className='w-5 h-5 lg:w-6 lg:h-6' />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact