import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from 'axios';
import { API_KEY } from '../../constants/constants';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current movie being displayed

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetch 5 movies by IMDb ID
        const movieIds = ['tt3896198', 'tt0848228', 'tt2488496', 'tt4154796', 'tt0110912'];
        const requests = movieIds.map(id =>
          axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
        );

        const responses = await Promise.all(requests);
        setMovies(responses.map(response => response.data)); // Set the movies data in state
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();

    // Automatically cycle through the movies every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % 5);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentMovie = movies[currentIndex]; // Get the current movie being displayed

  return (
    <div 
  style={{
    backgroundImage: currentMovie && currentMovie.Poster !== 'N/A'
      ? `url(${currentMovie.Poster.replace('SX300', 'SX1080')})`  // Attempt to use higher-resolution image
      : 'url("https://via.placeholder.com/1920x1080")', // Fallback placeholder
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }}
  className='banner'
>

      <div className='content'>
        {currentMovie ? (
          <>
            <h1 className='title'>{currentMovie.Title}</h1>
            <div className='navbar_buttons'>
              <button className='button'>Play</button>
              <button className='button'>My list</button>
            </div>
            <h3 className='description'>{currentMovie.Plot}</h3>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;
