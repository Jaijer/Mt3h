import { createContext } from "react";


export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const key = import.meta.env.VITE_SOME_KEY;

    const getTrendingMovies = async (pageNumber) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${pageNumber}`);
        const data = await response.json();
        return data.results;
    }

    const getTopMovies = async (pageNumber) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=${pageNumber}`);
        const data = await response.json();
        return data.results;
    }


    const getTrendingAnime = async (pageNumber) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&with_original_language=ja&with_genres=16&page=${pageNumber}`);
        const data = await response.json();
        return data.results;
    }

    const getTopAnime = async (pageNumber) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&with_original_language=ja&with_genres=16&page=${pageNumber}`);
        const data = await response.json();
        return data.results;
    }

    const getTrendingShows = async (pageNumber) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&without_keywords=210024&page=${pageNumber}`);
        const data = await response.json();
        return data.results;
    }

    const getTopShows = async (pageNumber) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&without_keywords=210024&page=${pageNumber}`);
        const data = await response.json();
        return data.results;
    }


    const getMovieDetails = async (id) => {
        let response;
        response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos`);

        const data = await response.json();
        return data;
    }

    const getTvDetails = async (id) => {
        let response;
        response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&append_to_response=videos`);

        const data = await response.json();
        return data;
    }


    const getMovieSearchResults = async (text) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${text}`);
        const data = await response.json();
        return data.results;
    }

    const getShowSearchResults = async (text) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${key}&without_keywords=210024&query=${text}`);
        const data = await response.json();
        return data.results;
    }

    const getAnimeSearchResults = async (text) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${key}&with_original_language=ja&with_genres=16&query=${text}`);
        const data = await response.json();
        return data.results;
    }


    return <MoviesContext.Provider value={{
        getTrendingMovies,
        getTopMovies,
        getTrendingAnime,
        getTopAnime,
        getTrendingShows,
        getTopShows,
        getMovieDetails,
        getTvDetails,
        getMovieSearchResults,
        getShowSearchResults,
        getAnimeSearchResults,
    }}>
        {children}
    </MoviesContext.Provider>
}