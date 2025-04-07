import { useEffect, useState } from 'react'
import './App.css'
import MovieInfo from './MovieInfo'
import MovieDets from './MovieDets.jsx'

function App() {
  const [movie, setMovie] = useState([])
  const [movieDetails, setMovieDetails] = useState([null])

  useEffect(()=>{
    const getMovie = async () =>{
      const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=1d23d7b2")
      const data = await res.json()
      console.log(data)
      setMovie(data)
    }
    getMovie();
    console.log("got to first useEffect")
  },[])

  useEffect(()=>{
    console.log("got to second useEffect")
  }, [movieDetails])

console.log(movie)
console.log(movieDetails)
  return (
    <>
    <h1>Movie To Watch</h1>
    {
      movieDetails ? <MovieDets movieDetails={movieDetails} setMovieDetails={setMovieDetails} /> :
      <MovieInfo movie={movie} setMovie={setMovie} movieDetails={movieDetails} setMovieDetails={setMovieDetails}/>
    }
        
       
    </>
  )
}

export default App
