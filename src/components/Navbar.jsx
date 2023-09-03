import React, { useContext } from 'react'
import {BsFillSunFill} from 'react-icons/bs';
import {BsFillMoonFill} from 'react-icons/bs';
import PopcornLogo from '../assets/Popcorn-logo.png'
import { ThemeContext } from '../App';
import { useNavigate } from 'react-router';

function Navbar() {
  const {toggleTheme} = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div className="h-full p-3 flex justify-between items-center bg-yellowish dark:bg-gray-900 dark:text-gray-300">
      <div onClick={()=>navigate('/')} className='flex items-center gap-2 hover:cursor-pointer select-none'>
        <img src={PopcornLogo} alt="" className='w-8 h-8' />
        <div className="h1 text-2xl font-press-start mt-2">Mt3h</div>
      </div>

        <div className="flex gap-5 select-none mt-2">

          <div onClick={()=>navigate('tv/shows')} className='flex gap-2 cursor-pointer transition-all hover:scale-105 hover:opacity-80'>
            <h3 className="text-lg font-press-start hidden sm:block">Tv</h3>
            <h3 className="text-lg font-press-start hidden sm:block">Shows</h3>
          </div>

          <h3 onClick={()=>navigate('tv/anime')} className="text-lg font-press-start cursor-pointer transition-all hover:scale-105 hover:opacity-80 hidden sm:block">Anime</h3>
          
          <h3 onClick={()=>navigate('movies')} className="text-lg font-press-start cursor-pointer transition-all hover:scale-105 hover:opacity-80 hidden sm:block">Movies</h3>

            <BsFillMoonFill onClick={toggleTheme} className='text-2xl block dark:hidden transition-all hover:scale-110 hover:cursor-pointer mx-2' />
            <BsFillSunFill onClick={toggleTheme} className='text-2xl hidden dark:block transition-all hover:scale-110 hover:cursor-pointer mx-2' />
        </div>
    </div>
  )
}

export default Navbar