import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../context/MoviesContext';
import {AiOutlineYoutube} from 'react-icons/ai';

function MovieDetails() {
    window.scrollTo({ top: 0, left: 0});

    const {getMovieDetails} = useContext(MoviesContext);
    const id = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    const [details, setDetails] = useState({});
    
    let year = (details.release_date?details.release_date:details.first_air_date)?.substring(0, 4);

    let trailerLink;
    const videos = details.videos?.results;

    for(let i = 0; i<videos?.length; i++) {
        if(videos[i].name.toLowerCase().includes('trailer')) {
            trailerLink = "https://www.youtube.com/watch?v=" + videos[i].key;
        }
    }
    
    const asyncGetDetails = async ()=> {
        let detailsData = await getMovieDetails(id);
        setDetails(detailsData);
      }
    
      useEffect(()=> {
        asyncGetDetails();
      }, [])

  return (
    <div className='h-screen relative'>
        <img className='max-h-full h-full max-w-full w-full opacity-20 absolute top-0' src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`} alt="" />
        <div className="flex flex-col sm:flex-row h-full w-full absolute top-0 p-9 gap-5 overflow-hidden">

            <img className='h-[70%]' src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} alt="" />
            
            <div className="flex flex-col mt-9">

                <div className="flex items-center">
                    <div className='text-3xl font-bold mb-8 mr-2'>{details.name?details.name:details.title}</div> 
                    <div className="text-3xl font-semibold opacity-80 mb-8">({year})</div>
                    <h1 className='text-lg mt-[-24px] ml-3 dark:text-white text-black border-4 border-red-600 rounded-full font-bold p-2 m-1'>{parseFloat   (details.vote_average).toFixed(1)}</h1>

                </div>

                <div className="hidden sm:block mb-9">
                    <div className="text-xl font-bold mb-1">Overview</div>   
                    <div className="text-lg font-semibold">{details.overview}</div>   
                </div>

                {trailerLink && 
                    <a href={trailerLink} target='_blank' className="p-3 border-2 border-red-500 group transition-all hover:cursor-pointer hover:text-gray-800 hover:font-semibold hover:bg-red-500 w-full sm:w-64 rounded-2xl flex justify-center items-center gap-2">
                        <h3 className='text-lg'>Watch Trailer</h3>
                        <AiOutlineYoutube className='text-4xl text-red-500 group-hover:text-gray-800' />
                    </a>
                }
            </div>
        </div>
    </div>
  )
}

export default MovieDetails