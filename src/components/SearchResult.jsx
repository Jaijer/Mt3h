import React from 'react'
import { useNavigate } from 'react-router';

function SearchResult({result}) {
    const navigate = useNavigate();
    let year = (result.release_date?result.release_date:result.first_air_date)?.substring(0, 4);

  return (
    <div onClick={()=>navigate(`${result.id}`)} className='p-1 hover:opacity-70 hover:cursor-pointer'>
        <h3 className='inline mr-1'>{result.title?result.title:result.name}</h3>
        ({year})
    </div>
  )
}

export default SearchResult