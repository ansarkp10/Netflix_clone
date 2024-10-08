**Movie Streaming Website**
This project is a Movie Streaming Website built using React, which dynamically fetches movie data from the OMDb API and displays movie posters, trailers, and descriptions. Users can explore different genres like Netflix Originals, Action, Drama, Romance, and Horror, with an interactive interface.

Table of Contents
Features
Technologies
Setup
Folder Structure
API Configuration
Running the Project
Credits

**Features**
Dynamic Movie Fetching: Fetch movie data and posters from OMDb API based on selected genres.
YouTube Trailer Integration: Play trailers directly from YouTube for selected movies.
Responsive Design: Supports small and large screen sizes.
Genres: Explore multiple genres such as:
Netflix Originals
Action
Drama
Romance
Horror
Interactive UI: Clicking on a movie poster will fetch and play its trailer from YouTube.

**Technologies**
Frontend Framework: React.js
API: OMDb API and YouTube Data API
Styling: CSS
Axios: For making HTTP requests
react-youtube: For embedding YouTube trailers
JavaScript (ES6): Language used for logic implementation

**Setup**
Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js (version 18.17.1 or later)
npm (version 6 or later)

**Installation**
Clone the repository:

git clone https://github.com/your-username/movie-streaming-website.git
cd movie-streaming-website
**Install dependencies:**

npm install

**Configure API keys:**
You'll need API keys from both the OMDb API and YouTube Data API.

Sign up at OMDb API to get your OMDb API key.
Set up a project on Google Developer Console and enable the YouTube Data API to get your API key.

Create constants.js in the src/constants/ folder:


// src/constants/constants.js
export const API_KEY = 'YOUR_OMDB_API_KEY';  // OMDb API Key
export const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY';  // YouTube Data API Key

**API Configuration**
The project uses two APIs:

OMDb API: Used to fetch movies by genres.
YouTube Data API: Used to fetch movie trailers.

**Example OMDb API URL:**

http://www.omdbapi.com/?s=netflix&apikey=YOUR_OMDB_API_KEY

**Example YouTube API URL for trailers:**

https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=YOUR_YOUTUBE_API_KEY&q=movie%20trailer

**Running the Project**
Start the React development server:

npm start
Open your browser and navigate to:

http://localhost:3000
You should see the movie streaming website, with dynamic content fetched from the APIs.

**Credits**
This project was built using data from the OMDb API and YouTube Data API.
