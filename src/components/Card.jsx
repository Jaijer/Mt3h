import React from 'react'
import NotFound from '../assets/NotFound.jpg';
import { useNavigate } from 'react-router';

function Card({title, rating, poster, title2, id}) {
  const navigate = useNavigate();

  return (
    <div className='relative flex justify-center' onClick={()=>navigate(`${id}`)}>
        <div className='w-full group hover:cursor-pointer bg-browny dark:bg-grayBlue rounded-md p-1'>
            {poster?<img className='w-full transition-all duration-300 group-hover:scale-105 group-hover:rounded-md' src={`https://image.tmdb.org/t/p/original/${poster}`} alt="" />
            :<img className='w-full transition-all duration-300 group-hover:scale-105 group-hover:rounded-md' src={NotFound} alt="" />
            }
            <h3 className="text-xl block mt-2">{title}</h3>
            <h3 className="text-xl block mt-2">{title2}</h3>
            <h1 className='absolute top-0 opacity-0 text-lg transition-all duration-300 group-hover:opacity-100 dark:text-white text-black bg-white dark:bg-black border-4 border-red-600 rounded-full font-bold p-2 m-1'>{rating}</h1>
        </div>
    </div>
  )
}

export default Card