import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const App = () => {


  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");


  async function getMovies() {
    let APIURL =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

    if (search !== "") {
      APIURL = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;
    }

    const response = await fetch(APIURL);
    const data = await response.json();
    setMovies(data.results);

  }

  useEffect(
    () => {
      getMovies(); //mount
    },
    [search] //dependenciesx
  )
  return (
    <div className="container-xxl">
      <div class="search-box mb-5">
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" class="form-control form-control-lg shadow" placeholder="Movies Search" />
      </div>

      <div class="container">

        <div class="row g-4">
          {
            movies.map((data, index) => {
              return <MovieCard key={index} title={data.title} vote_average={data.vote_average} poster={"https://image.tmdb.org/t/p/w1280" + data.poster_path} />
            })
          }

        </div>
      </div>

    </div>
  )
}

export default App
