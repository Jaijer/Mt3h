import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../context/MoviesContext'
import TrendingList from '../components/TrendingList';
import TopList from '../components/TopList';
import ShowSearchBar from '../components/ShowSearchBar';

function TvShows() {
  const {getTrendingShows, getTopShows} = useContext(MoviesContext);

  const [trending, setTrending] = useState();
  const [top, setTop] = useState();

  const asyncGetTrendingAndTopMovies = async ()=> {
    let trendingData = await getTrendingShows('1');
    let topData = await getTopShows('1');

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
        <ShowSearchBar />
        <TrendingList trending={trending} isHome={true} />
        <TopList top={top} isHome={true} />
      </div>
    )
  }
}

export default TvShows