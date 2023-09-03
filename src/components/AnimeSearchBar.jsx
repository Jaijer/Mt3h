import React, { useContext, useState } from 'react'
import { MoviesContext } from '../context/MoviesContext';
import SearchResult from './SearchResult';

function AnimeSearchBar() {
    const {getAnimeSearchResults} = useContext(MoviesContext);

    const [text, setText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const asyncGetSearchResults = async (e)=> {
        setText(e.target.value);
        let result = await getAnimeSearchResults(e.target.value);
        result = result.slice(0,8);
        setSearchResults(result);
    }

  return (
    <div className="flex justify-center items-center select-none">
        <div className="w-full md:w-[500px]">

            <input value={text} onChange={(e)=>{
                asyncGetSearchResults(e);
            }} type="text"
            className={"px-4 py-3 text- font-press-start outline-none bg-browny dark:bg-grayBlue bg-opacity-70 dark:bg-opacity-50 placeholder:text-gray-700 dark:placeholder:text-gray-400 mt-1 rounded-3xl w-full " + (searchResults.length? "rounded-b-none":"")} placeholder='Search' />

            {searchResults.length? 
                <div className="relative w-full">
                    <div className="absolute top-0 left-0 z-10 bg-browny dark:bg-grayBlue flex flex-col w-full rounded-b-3xl p-2 gap-2">
                        {searchResults.map((result, i)=>
                            <SearchResult key={i} result={result} />
                        )}
                    </div>
                </div>
            :''}
        </div>
    </div>
  )
}

export default AnimeSearchBar