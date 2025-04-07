function MovieInfo ({movie, setMovie, movieDetails, setMovieDetails}){


    return(
        <>
        
            
                <div key={movie}>
                    <h1>{movie.Title}</h1>
                    <img src= {movie.Poster}/>
                    <p>{movie.Genre}</p>
                    <h2>{movie.Year}</h2>
                    <button onClick={()=>setMovieDetails(movie)} > 
                        Movie Details
                </button>
                </div>
            

        
        </>
    )
}









export default MovieInfo