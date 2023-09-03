import React from 'react'
import PopcornLogo from '../assets/Popcorn-logo.png'

function Footer() {
  return (
    <div className="flex justify-center items-center bg-yellowish dark:bg-gray-900 p-3">
        <img src={PopcornLogo} alt="" className='w-10 h-10 hover:animate-shake' />
    </div>
  )
}

export default Footer