import React from 'react'
import { useNavigate } from 'react-router';

function Home() {
const navigate = useNavigate();

  return (
    <div className='flex justify-center w-full h-screen'>

        <div className="h-[100%] w-[85%] grid sm:grid-cols-3 gap-2 sm:gap-5 pt-0 sm:pt-2">
            <div className='relative group' onClick={()=>navigate('tv/shows')}>
                <div className="h-full bg-shows bg-cover bg-center hover:cursor-pointer transition-all duration-300 hover:rounded-lg hover:blur-md rounded-sm"></div>
                <div className="absolute bottom-[15%] left-5 font-press-start text-2xl opacity-0 group-hover:opacity-100 text-gray-200 transition-all
                duration-300">Tv Shows</div>
            </div>


            <div className='relative group' onClick={()=>navigate('tv/anime')}>
                <div className="h-full bg-anime bg-cover bg-center hover:cursor-pointer transition-all duration-300 hover:rounded-lg hover:blur-md rounded-sm"></div>
                <div className="absolute bottom-[15%] left-5 font-press-start text-2xl opacity-0 group-hover:opacity-100 text-gray-200 transition-all
                duration-300">Anime</div>
            </div>
            
            <div className='relative group' onClick={()=>navigate('movies')}>
                <div className="h-full bg-movies bg-cover bg-center hover:cursor-pointer transition-all duration-300 hover:rounded-lg hover:blur-md rounded-sm"></div>
                <div className="absolute bottom-[15%] left-5 font-press-start text-2xl opacity-0 group-hover:opacity-100 text-gray-200 transition-all
                duration-300">Movies</div>
            </div>    
        </div>
        
        
    </div>
  )
}

export default Home