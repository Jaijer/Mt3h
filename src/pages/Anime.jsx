import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../context/MoviesContext'
import TrendingList from '../components/TrendingList';
import TopList from '../components/TopList';
import AnimeSearchBar from '../components/AnimeSearchBar';

function Anime() {
  const {getTrendingAnime, getTopAnime} = useContext(MoviesContext);

  const [trending, setTrending] = useState();
  const [top, setTop] = useState();

  const asyncGetTrendingAndTopMovies = async ()=> {
    let trendingData = await getTrendingAnime('1');
    let topData = await getTopAnime('1');

    trendingData = trendingData.slice(0,6);
    topData = topData.slice(0,6);
    setTrending(trendingData);
    setTop(topData);
  }

  useEffect(()=> {
    asyncGetTrendingAndTopMovies();
  }, [])
  
  if(top && trending) {
    return (
      <div className='h-full'>
        <AnimeSearchBar />
        <TrendingList trending={trending} isHome={true} />
        <TopList top={top} isHome={true} />
      </div>
    )
  }
}

export default Anime