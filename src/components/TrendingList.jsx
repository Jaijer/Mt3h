import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router'

function TrendingList({trending, isHome}) {
  const navigate = useNavigate();

  return (
    <div className='mt-10'>
      {isHome && 
        <div className="flex justify-center sm:justify-between items-center">
          <h3 className="text-2xl mb-4 font-press-start">Trending</h3>
          <button className="text-lg mb-4 font-press-start sm:ml-8 px-4 py-2 bg-browny dark:bg-grayBlue dark:bg-opacity-80 bg-opacity-80 rounded-full
          transition-all hover:scale-105 hover:bg-opacity-100 dark:hover:bg-opacity-100 hidden sm:block"
          onClick={()=>navigate('trending')}>See more</button>
      </div>
      }

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-1 gap-4">
          {trending.map((one, i)=> (
              <Card
              key={i} title={one.title} title2={one.name} rating={one.vote_average} poster={one.poster_path} id={one.id} />
          ))}
      </div>
      
      {isHome &&
        <div className="flex justify-center mt-6">
          <button className="text-lg mb-4 font-press-start sm:ml-8 px-4 py-2 bg-browny dark:bg-grayBlue dark:bg-opacity-80 bg-opacity-80 rounded-full
          transition-all hover:scale-105 hover:bg-opacity-100 dark:hover:bg-opacity-100 block sm:hidden"
          onClick={()=>navigate('trending')}>See more</button>
        </div>
      }
    </div>
  )
}

export default TrendingList