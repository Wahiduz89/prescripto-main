import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className='bg-slate-800 mt-40'>
      <div className='md:mx-10 px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          
          {/* Company Info Section */}
          <div className='lg:col-span-1'>
            <div className='mb-5'>
              <h2 className='text-3xl font-bold text-white mb-2 flex items-center'>
                <span className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3'>
                  <svg className='w-5 h-5 text-white' viewBox='0 0 46 46' fill='currentColor'>
                    <path d='M22.9997 0C35.7026 0 45.9997 10.2971 45.9997 23V39.1C45.9997 40.93 45.2728 42.685 43.9788 43.979C42.6848 45.273 40.9297 46 39.0997 46H24.1497V35.9099C24.1497 33.6076 24.29 31.2225 25.4975 29.2629C26.362 27.8586 27.5185 26.6566 28.8884 25.7385C30.2583 24.8204 31.8096 24.2077 33.4371 23.9418L33.8776 23.8705C34.0592 23.8085 34.2168 23.6912 34.3284 23.5351C34.44 23.379 34.5 23.1919 34.5 23C34.5 22.8081 34.44 22.621 34.3284 22.4649C34.2168 22.3088 34.0592 22.1915 33.8776 22.1294L33.4371 22.0581C31.0591 21.6697 28.8632 20.5441 27.1594 18.8403C25.4556 17.1365 24.3301 14.9406 23.9416 12.5626L23.8703 12.1222C23.8082 11.9406 23.6909 11.7829 23.5348 11.6713C23.3787 11.5597 23.1916 11.4997 22.9997 11.4997C22.8078 11.4997 22.6208 11.5597 22.4647 11.6713C22.3086 11.7829 22.1913 11.9406 22.1292 12.1222L22.0579 12.5626C21.7922 14.1902 21.1795 15.7415 20.2614 17.1114C19.3433 18.4814 18.1412 19.6378 16.7368 20.5022C14.7772 21.7097 12.3921 21.85 10.0898 21.85H0.0273438C0.628794 9.68185 10.6832 0 22.9997 0Z'/>
                    <path d='M0 24.15H10.0901C12.3924 24.15 14.7775 24.2903 16.7371 25.4978C18.2689 26.4417 19.5583 27.7311 20.5022 29.2629C21.7097 31.2225 21.85 33.6076 21.85 35.9099V46H6.9C5.07001 46 3.31496 45.273 2.02096 43.979C0.726962 42.685 0 40.93 0 39.1L0 24.15ZM46 2.3C46 2.91 45.7577 3.49501 45.3263 3.92635C44.895 4.35768 44.31 4.6 43.7 4.6C43.09 4.6 42.505 4.35768 42.0737 3.92635C41.6423 3.49501 41.4 2.91 41.4 2.3C41.4 1.69 41.6423 1.10499 42.0737 0.673654C42.505 0.242321 43.09 0 43.7 0C44.31 0 44.895 0.242321 45.3263 0.673654C45.7577 1.10499 46 1.69 46 2.3Z'/>
                  </svg>
                </span>
                Prescripto
              </h2>
              <p className='text-blue-300 text-sm font-medium ml-11'>Healthcare Solutions</p>
            </div>
            <p className='text-gray-300 leading-6 mb-6'>
              Your trusted healthcare companion connecting patients with qualified medical professionals. 
              Experience seamless appointment booking and comprehensive healthcare services.
            </p>
            
            {/* Social Media Links */}
            <div className='flex space-x-4'>
              <a href="#" className='w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z' clipRule='evenodd'/>
                </svg>
              </a>
              <a href="#" className='w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84'/>
                </svg>
              </a>
              <a href="#" className='w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z' clipRule='evenodd'/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              <li>
                <Link to='/' className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/doctors' className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to='/about' className='text-gray-300 hover:text-white transition-colors duration-300'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/contact' className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Contact Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/login')}
                  className='text-gray-300 hover:text-white transition-colors duration-300 text-left'
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6'>Services</h3>
            <ul className='space-y-3'>
              <li>
                <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>
                  General Physician
                </a>
              </li>
              <li>
                <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Specialist Care
                </a>
              </li>
              <li>
                <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Emergency Services
                </a>
              </li>
              <li>
                <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Health Checkups
                </a>
              </li>
              <li>
                <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>
                  Telemedicine
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6'>Contact Information</h3>
            <div className='space-y-4 text-gray-300'>
              <div className='flex items-start space-x-3'>
                <svg className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'/>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'/>
                </svg>
                <div>
                  <p>54709 Willms Station</p>
                  <p>Suite 350, Washington, USA</p>
                </div>
              </div>
              
              <div className='flex items-center space-x-3'>
                <svg className='w-5 h-5 text-primary flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'/>
                </svg>
                <p>(415) 555-0132</p>
              </div>
              
              <div className='flex items-center space-x-3'>
                <svg className='w-5 h-5 text-primary flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/>
                </svg>
                <p>info@prescripto.com</p>
              </div>

              <div className='mt-4 pt-4 border-t border-slate-600'>
                <p className='text-sm'>
                  <span className='font-medium'>Business Hours:</span><br />
                  Mon - Fri: 8:00 AM - 8:00 PM<br />
                  Sat - Sun: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-slate-600 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-sm text-gray-300'>
              <p>&copy; 2024 Prescripto Healthcare Solutions. All rights reserved.</p>
            </div>
            <div className='flex flex-wrap justify-center md:justify-end space-x-6 text-sm'>
              <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>
                Privacy Policy
              </a>
              <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>
                Terms of Service
              </a>
              <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>
                Cookie Policy
              </a>
              <a href="#" className='text-gray-300 hover:text-white transition-colors duration-300'>
                Medical Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer