import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from 'axios';
import YouTube from 'react-youtube';
import { API_KEY, YOUTUBE_API_KEY } from '../../constants/constants';

function RowPost({ title, isSmall }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const genreTerm = title;  // Use the title as the genre (Drama, Romance, Horror)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${genreTerm}&type=movie&apikey=${API_KEY}`);
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error('Network Error:', error);
      }
    };

    fetchMovies();
  }, [genreTerm]);

  // Fetch YouTube trailer
  const fetchTrailer = async (movie) => {
    try {
      const query = movie.Title + ' trailer';
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          maxResults: 1,
          key: YOUTUBE_API_KEY,
          q: query,
        },
      });
      const videoId = response.data.items[0]?.id?.videoId;
      setTrailerUrl(videoId); // Set fetched video ID as trailerUrl
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: { autoplay: 1 },
  };

  const handlePosterClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(''); // Close trailer if already open
    } else {
      fetchTrailer(movie); // Fetch and display the trailer
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`posters ${isSmall ? 'small' : ''}`}>
        {movies.map((movie) => (
          <img
            key={movie.imdbID}
            className={`poster ${isSmall ? 'smallPoster' : ''}`}
            src={movie.Poster}
            alt={movie.Title}
            onClick={() => handlePosterClick(movie)} // Fetch trailer on click
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}  {/* Render YouTube player */}
    </div>
  );
}

export default RowPost;
