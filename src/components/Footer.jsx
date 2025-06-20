import React from 'react'
import logoIcon from '../assets/movhub-01.svg'

function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-10 px-6 sm:px-20 mt-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="mb-6 sm:mb-0">
          <img src={logoIcon} alt="logo" className='w-40' />
          <p className="text-sm max-w-xs">
            Stream your favorite movies and shows. Anytime. Anywhere.
          </p>
        </div>

        <div className="flex gap-10 text-sm">
          <ul className="space-y-1">
            <li className="font-semibold text-white ">Browse</li>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Movies</li>
            <li className='cursor-pointer'>TV Shows</li>
            <li className='cursor-pointer'>Top Rated</li>
          </ul>
          <ul className="space-y-1">
            <li className="font-semibold text-white ">Help</li>
            <li className='cursor-pointer'>Support</li>
            <li className='cursor-pointer'>FAQ</li>
            <li className='cursor-pointer'>Privacy</li>
            <li className='cursor-pointer'>Terms</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-xs text-gray-500 text-center border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Movhub. All rights reserved.
      </div>
    </footer>
  )
}
Footer
export default Footer