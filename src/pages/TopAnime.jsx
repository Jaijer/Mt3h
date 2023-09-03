import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../context/MoviesContext';
import TopList from '../components/TopList';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';


function TopAnime() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    const {getTopAnime} = useContext(MoviesContext);

    const [top, setTop] = useState();
    const [page, setPage] = useState(1);
  
    const asyncGetTrendingAndTopMovies = async ()=> {
      let trendingData = await getTopAnime(page.toString());
  
      setTop(trendingData);
    }
  
    useEffect(()=> {
      asyncGetTrendingAndTopMovies();
    }, [page])

    const previous = ()=> {
        if(page > 1) {
            setPage((prev)=>(prev - 1));
        }
    }
    const next = ()=> {
        setPage((prev)=>(prev + 1));
    }
    
    if(top) {
      return (
        <div className='h-full'>
          <TopList top={top} />

          <div className="flex justify-center gap-8 mt-5">
            {page>1 && <BsFillArrowLeftCircleFill onClick={previous} className="text-5xl transition-all hover:scale-105 hover:cursor-pointer" />}
            <BsFillArrowRightCircleFill onClick={next} className="text-5xl transition-all hover:scale-105 hover:cursor-pointer" />
          </div>
        </div>
      )
    }
}

export default TopAnime;