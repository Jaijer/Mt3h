import { createContext, useState } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Anime from "./pages/Anime";
import { MoviesProvider } from "./context/MoviesContext";
import Footer from "./components/Footer";
import TrendingMovies from "./pages/TrendingMovies";
import TopMovies from "./pages/TopMovies";
import TrendingAnime from "./pages/TrendingAnime";
import TopAnime from "./pages/TopAnime";
import TrendingShows from "./pages/TrendingShows";
import TopShows from "./pages/TopShows";
import MovieDetails from "./pages/MovieDetails";
import TvDetails from "./pages/TvDetails";

export const ThemeContext = createContext();

function App() {
  let valueFromStorage;
  if(localStorage.getItem('isDark') === 'false') {
    valueFromStorage = false;
  }
  else {
    valueFromStorage = true;
  }
  const [isDark, setIsDark] = useState(valueFromStorage);

  const toggleTheme = () => {
    const newValue = !isDark;
    setIsDark((prev)=>(!prev));
    localStorage.setItem('isDark', newValue);
  }


  return (
    <Router>
      <ThemeContext.Provider value={{
        toggleTheme,
      }}>
        <div className={isDark? 'dark min-h-screen':'min-h-screen'}>
          <Navbar />
          
          <div className="min-h-screen bg-pinky dark:bg-deepBlue dark:text-gray-300 pt-4 pb-10 px-4">
            <MoviesProvider>
              <Routes>
                <Route path='/' element={<Home/>} />

                <Route path='movies' element={<Movies/>} />
                <Route path='movies/trending' element={<TrendingMovies/>} />
                <Route path='movies/top' element={<TopMovies/>} />

                <Route path='tv/shows' element={<TvShows/>} />
                <Route path='tv/shows/trending' element={<TrendingShows/>} />
                <Route path='tv/shows/top' element={<TopShows/>} />

                <Route path='tv/anime' element={<Anime/>} />
                <Route path='tv/anime/trending' element={<TrendingAnime/>} />
                <Route path='tv/anime/top' element={<TopAnime/>} />

                <Route path="movies/:id" element={<MovieDetails />} />
                <Route path="tv/anime/:id" element={<TvDetails />} />
                <Route path="tv/shows/:id" element={<TvDetails />} />
                <Route path="movies/trending/:id" element={<MovieDetails />} />
                <Route path="tv/anime/trending/:id" element={<TvDetails />} />
                <Route path="tv/shows/trending/:id" element={<TvDetails />} />
                <Route path="movies/top/:id" element={<MovieDetails />} />
                <Route path="tv/anime/top/:id" element={<TvDetails />} />
                <Route path="tv/shows/top/:id" element={<TvDetails />} />


              </Routes>
            </MoviesProvider>
          </div>

          <Footer />
        </div>
      </ThemeContext.Provider>
    </Router>
  )
}

export default App
